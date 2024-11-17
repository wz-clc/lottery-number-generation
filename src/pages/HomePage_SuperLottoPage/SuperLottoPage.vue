<script setup lang="ts">
  import SuperLottoBall from './components/SuperLottoBall.vue'
  import OddsArea from './components/OddsArea.vue'
  import { useSuperLottoPageStore } from '@/store/SuperLottoPage'
  import { randomInt } from 'mathjs'

  const store = useSuperLottoPageStore()
  const resultModal = ref()

  const frontNum = ref<number[]>([])
  const backNum = ref<number[]>([])

  const handleReset = () =>
    store.$patch((state) => {
      state.SuperLottoPage.FrontDisable.length = 0
      state.SuperLottoPage.BackDisable.length = 0
    })

  const handleConfirm = () => {
    // 清空号码
    frontNum.value.length = 0
    backNum.value.length = 0

    // 生成激活的号码
    const frontActiveNum = Array.from({ length: 35 }, (_, index) => index + 1).filter(
      (item) => !store.SuperLottoPage.FrontDisable.includes(item)
    )
    const backActiveNum = Array.from({ length: 12 }, (_, index) => index + 1).filter(
      (item) => !store.SuperLottoPage.BackDisable.includes(item)
    )

    console.log(frontActiveNum, 'frontActiveNum')
    console.log(backActiveNum, 'backActiveNum')

    // 生成前区号码
    while (frontNum.value.length < 5) {
      const randomIndex = randomInt(0, frontActiveNum.length)
      const targetNum = frontActiveNum[randomIndex]

      const f1 = !store.SuperLottoPage.FrontDisable.includes(targetNum)
      const f2 = !frontNum.value.includes(targetNum)

      if (f1 && f2) {
        frontNum.value.push(targetNum)
        frontActiveNum.splice(randomIndex, 1)
      }
    }
    // 生成后区号码
    while (backNum.value.length < 2) {
      const randomIndex = randomInt(0, backActiveNum.length)
      const targetNum = backActiveNum[randomIndex]

      const f1 = !store.SuperLottoPage.BackDisable.includes(targetNum)
      const f2 = !backNum.value.includes(targetNum)

      if (f1 && f2) {
        backNum.value.push(targetNum)
        backActiveNum.splice(randomIndex, 1)
      }
    }

    // 排序
    frontNum.value.sort((a, b) => a - b)
    backNum.value.sort((a, b) => a - b)

    resultModal.value.showModal()
  }
</script>

<template>
  <div class="mt-[6vw] flex origin-top scale-110 gap-2 sm:mt-[4vw] sm:scale-150">
    <!-- 前区 -->
    <div class="grid grid-cols-5 items-center justify-items-center gap-2 overflow-hidden">
      <SuperLottoBall
        v-for="(item, index) in 35"
        :key="index"
        :number="item"
        type="front"
      />
    </div>
    <!-- 后区 -->
    <div class="grid grid-cols-2 items-center justify-items-center gap-2 overflow-hidden">
      <SuperLottoBall
        v-for="(item, index) in 12"
        :key="index"
        :number="item"
        type="back"
      />
      <button
        class="btn btn-square btn-neutral btn-sm text-lg"
        @click="handleReset"
      >
        🔄
      </button>

      <button
        class="btn btn-square btn-primary btn-sm text-lg"
        @click="handleConfirm"
      >
        🎲
      </button>
    </div>
  </div>
  <dialog
    ref="resultModal"
    class="modal"
  >
    <div class="modal-box">
      <h3 class="text-lg font-bold">生成的号码：</h3>
      <p class="py-3">
        <span> {{ frontNum.join('，') }}</span>
        <span class="mx-2">+</span>
        <span> {{ backNum.join('，') }} </span>
      </p>
      <OddsArea />
      <div class="modal-action">
        <form method="dialog">
          <button class="btn btn-sm">关闭</button>
        </form>
      </div>
    </div>
  </dialog>
</template>

<style scoped>
  .my-btn {
    @apply aspect-square w-8 p-0 text-center text-sm font-bold leading-8;
  }
</style>
