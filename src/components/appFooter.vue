<template>
  <footer class="sticky-footer bg-white" id="footer">
    <div class="container my-auto">
      <div class="copyright text-center my-auto">
        <span> &copy; LSI App {{ computed }}</span>
      </div>
    </div>
  </footer>
</template>

<script>
import { computed } from "vue";

export default {
  setup() {
    const year = computed(() => new Date().getFullYear());
    return { year };
  },
};
</script>


<style >

</style>