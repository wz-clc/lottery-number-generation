export const useSuperLottoPageStore = defineStore(
  'SuperLottoPage',
  () => {
    const state = reactive({
      SuperLottoPage: {
        FrontDisable: [] as number[],
        BackDisable: [] as number[],
      },
    })

    return { ...toRefs(state) }
  }
  // {
  //   persist: true, // 数据持久化
  // }
)
