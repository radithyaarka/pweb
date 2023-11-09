<script>
import Modal from "../components/Modal.vue";
import CreateTodo from "../components/CreateTodo.vue";

export default {
  components: {
    Modal,
    CreateTodo,
  },
  data() {
    return {
      isModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.isModal = !this.isModal;
    },
  },
};
</script>

<template>
  <div class="w-full flex justify-end">
    <button
      @click="toggleModal"
      class="px-6 py-2 bg-purple-700 text-gray-200 font-bold mb-2 w-fit border-[1.5px] hover:scale-110 transition-all hover:ease-in-out hover:duration-300 rounded-xl text-sm"
    >
      Create
    </button>
    <Modal @close-modal="toggleModal" :isModal="isModal">
      <CreateTodo @close-modal="toggleModal" />
    </Modal>
  </div>
</template>
