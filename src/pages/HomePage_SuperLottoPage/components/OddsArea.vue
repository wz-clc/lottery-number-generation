<script setup lang="ts">
  import { useSuperLottoPageStore } from '@/store/SuperLottoPage'
  import { combinations } from 'mathjs'

  const store = useSuperLottoPageStore()

  const constant = [
    { name: '一等奖', list: [{ X: 5, Y: 2 }] },
    { name: '二等奖', list: [{ X: 5, Y: 1 }] },
    { name: '三等奖', list: [{ X: 5, Y: 0 }] },
    { name: '四等奖', list: [{ X: 4, Y: 2 }] },
    { name: '五等奖', list: [{ X: 4, Y: 1 }] },
    { name: '六等奖', list: [{ X: 3, Y: 2 }] },
    { name: '七等奖', list: [{ X: 4, Y: 0 }] },
    {
      name: '八等奖',
      list: [
        { X: 3, Y: 1 },
        { X: 2, Y: 2 },
      ],
    },
    {
      name: '九等奖',
      list: [
        { X: 3, Y: 0 },
        { X: 2, Y: 1 },
        { X: 1, Y: 2 },
        { X: 0, Y: 2 },
      ],
    },
  ]

  const odds = (X: number, Y: number) => {
    const frontDisableLength = store.SuperLottoPage.FrontDisable.length
    const backDisableLength = store.SuperLottoPage.BackDisable.length
    try {
      let a1 = combinations(5, X)
      let a2 = combinations(30 - frontDisableLength, 5 - X)
      let a3 = combinations(2, Y)
      let a4 = combinations(10 - backDisableLength, 2 - Y)

      let b1 = combinations(35 - frontDisableLength, 5)
      let b2 = combinations(12 - backDisableLength, 2)

      return `${a1 * a2 * a3 * a4} / ${b1 * b2}`
    } catch {
      return '无法命中'
    }
  }
</script>

<template>
  <div class="flex flex-col gap-1">
    <span class="text-base">单注命中概率：</span>
    <div
      v-for="(item, index) in constant"
      :key="index"
      class="flex"
    >
      <label class="text-base leading-6">{{ item.name }}：</label>
      <div class="grid grid-cols-1 gap-1">
        <p
          v-for="(listItem, index2) in item.list"
          :key="`${index}-${index2}`"
          class="flex items-center"
        >
          <span class="ball bg-red-500">{{ listItem.X }}</span>
          <span class="mx-1 text-base">+</span>
          <span class="ball bg-blue-500">{{ listItem.Y }}</span>
          <span class="pl-2 text-base">{{ odds(listItem.X, listItem.Y) }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .ball {
    @apply inline-block aspect-square w-5 select-none rounded-full text-center text-sm leading-5 text-white;
  }
</style>
