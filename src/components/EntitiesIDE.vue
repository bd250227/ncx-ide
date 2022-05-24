<template>
  <section id="ncx-entities" class="my-4 max-w-full">
    <header id="ncx-entities-header" class="lg:flex lg:justify-between max-w-full">
      <h3 class="sm:text-3xl">Entities Editor</h3>
      <button @click="addNewEntity" class="
              mt-4
              lg:mt-0
              mb-4
              w-20
              h-12
              rounded-md
              flex
              justify-center
              bg-green-600
              items-center
              hover:bg-green-400
              focus:outline-none focus:ring focus:ring-green-300
            ">
        <DocumentAddIcon class="h-8 w-8 text-slate-100" />
      </button>
    </header>
    <section class=""></section>
    <footer>
      <a v-if="entities.length > 0" href="/ide#ncx-entities-header" class="focus:ring focus:ring-slate-700 text-sm">
        Back to top
      </a>
    </footer>
  </section>
</template>

<script>
import { DocumentAddIcon } from '@heroicons/vue/outline'

export default {
  components: {
    DocumentAddIcon,
  },
  data() {
    return {
      entities: [],
    };
  },
  methods: {
    addNewEntity(e) {
      console.log("new-entity-generator clicked!");
    },
  },
  mounted() {
    // just load dummy data for now
    (this.entities = [
      {
        id: 1,
        conceptLabel: "Rental",
        name: "Rental",
        attributes: [
          {
            id: 2,
            conceptLabel: "Data Attribute",
            name: "Rental Period",
            type: "Date Range",
          },
          {
            id: 3,
            conceptLabel: "Data Attribute",
            name: "Rental Price Before Discount",
            type: "Amount",
            initialValue: {
              id: 4,
              conceptLabel: "Number",
              value: 0.0,
            },
          },
          {
            id: 5,
            conceptLabel: "Data Attribute",
            name: "Discount",
            type: "Percentage",
            initialValue: {
              id: 6,
              conceptLabel: "Number",
              value: 0,
            },
          },
          {
            id: 7,
            conceptLabel: "Data Attribute",
            name: "Rental Price After Discount",
            type: "Amount",
            initialValue: {
              id: 8,
              conceptLabel: "Attribute Reference",
              refID: 3,
            },
          },
        ],
      },
    ])
  },
}

</script>