<script setup lang="ts">
  import { useSuperLottoPageStore } from '@/store/SuperLottoPage'
  import { useMousePressed } from '@vueuse/core'
  const props = defineProps<{ type: 'front' | 'back'; number: number }>()
  const store = useSuperLottoPageStore()
  const { pressed } = useMousePressed()

  const isExists = computed(() => {
    if (props.type === 'front') {
      return store.SuperLottoPage.FrontDisable.includes(props.number)
    }

    if (props.type === 'back') {
      return store.SuperLottoPage.BackDisable.includes(props.number)
    }

    return false
  })

  const handleMouseEnter = (number: number) => {
    if (pressed.value) handleMouseDown(number)
  }

  const handleMouseDown = (number: number) => {
    if (props.type === 'front' && store.SuperLottoPage.FrontDisable.length >= 30 && !isExists.value) {
      alert('前区至少保留5个号码')
      return
    }
    if (props.type === 'back' && store.SuperLottoPage.BackDisable.length >= 10 && !isExists.value) {
      alert('后区至少保留2个号码')
      return
    }

    if (props.type === 'front') {
      isExists.value ? unDisable(number) : disable(number)
    }
    if (props.type === 'back') {
      isExists.value ? unDisable(number) : disable(number)
    }
  }

  const disable = (number: number) => {
    if (props.type === 'front') {
      store.SuperLottoPage.FrontDisable.push(number)
    }
    if (props.type === 'back') {
      store.SuperLottoPage.BackDisable.push(number)
    }
  }

  const unDisable = (number: number) => {
    if (props.type === 'front') {
      const targetIndex = store.SuperLottoPage.FrontDisable.findIndex((item) => item === number)
      store.SuperLottoPage.FrontDisable.splice(targetIndex, 1)
    }
    if (props.type === 'back') {
      const targetIndex = store.SuperLottoPage.BackDisable.findIndex((item) => item === number)
      store.SuperLottoPage.BackDisable.splice(targetIndex, 1)
    }
  }
</script>

<template>
  <span
    class="ball"
    :class="{
      'bg-red-500': type === 'front',
      'bg-blue-500': type === 'back',
      disable: isExists,
    }"
    @mouseenter="handleMouseEnter(number)"
    @mousedown="handleMouseDown(number)"
  >
    {{ number }}
  </span>
</template>

<style scoped>
  .ball {
    @apply block aspect-square w-8 cursor-pointer select-none rounded-full text-center text-base font-bold leading-8 text-white;
  }
  .disable {
    @apply bg-slate-500;
  }
</style>
