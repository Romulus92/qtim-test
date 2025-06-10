<template>
  <div v-if="pageCount > 1" class="pagination">
    <button class="pagination__prev clean-btn" type="button" :disabled="page === 1" @click="page--">
      <IconChevron />
    </button>

    <template v-if="pageCount < 5">
      <button
        v-for="idx in pageCount"
        :key="idx"
        class="pagination__item"
        :class="{
          'pagination__item--active': page === idx
        }"
        type="button"
        @click="page = idx"
      >
        {{ idx }}
      </button>
    </template>

    <template v-if="pageCount > 4 && pageCount - page >= 2">
      <button
        v-for="idx in Math.min(3, pageCount)"
        :key="idx"
        class="pagination__item"
        :class="{
          'pagination__item--active': (page === 1 && idx === 1) || (page !== 1 && idx === 2)
        }"
        type="button"
        @click="page = idx + Math.max(page, 2) - 2"
      >
        {{ idx + Math.max(page, 2) - 2 }}
      </button>
      <span class="pagination__ellipsis">...</span>
      <button class="pagination__item" type="button" @click="page = pageCount">{{ pageCount }}</button>
    </template>

    <template v-if="pageCount > 4 && pageCount - page < 2">
      <button class="pagination__item" type="button" @click="page = 1">1</button>
      <span class="pagination__ellipsis">...</span>
      <button
        v-for="idx in 3"
        :key="idx"
        class="pagination__item"
        :class="{
          'pagination__item--active': pageCount - 3 + idx === page
        }"
        type="button"
        @click="page = pageCount - 3 + idx"
      >
        {{ pageCount - 3 + idx }}
      </button>
    </template>

    <button class="pagination__next clean-btn" type="button" :disabled="page === pageCount" @click="page++" >
      <IconChevron />
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  pageCount: number;
}>();
const page = defineModel<number>({ required: true });
</script>