<script setup lang="ts">
  import { themeChange } from 'theme-change'

  onMounted(() => {
    themeChange(false)
  })

  const route = useRoute()

  const router = useRouter()
  const routes = router.getRoutes()
  const parentPath = '/'
  const childRoutes = routes.filter((route) => {
    return route.path.startsWith(`${parentPath}`) && route.path !== parentPath
  })
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl normal-case">彩票号码生成器</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li>
          <details>
            <summary>{{ route.meta.title }}</summary>
            <ul class="bg-base-100 p-2">
              <li
                v-for="(item, index) in childRoutes"
                :key="index"
              >
                <router-link
                  :to="item.path"
                  :title="item.meta.title"
                  class="tab tab-sm"
                  :class="{
                    'tab-active': route.path === item.path,
                  }"
                >
                  {{ item.meta.title }}
                </router-link>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>
  <div class="mx-auto p-2">
    <router-view />
  </div>
</template>

<style scoped></style>
