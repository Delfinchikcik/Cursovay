<template>
  <q-page class="container_bg">
    <div class="container">
      <div class="q-pa-md row items-start q-gutter-md">
        <q-card
          class="my_card"
          flat
          bordered
          v-for="(activity, index) in activities"
          :key="index"
          :id="'activity-' + index"
        >
          <q-img class="card_img" :src="activity.img" />
          <q-card-section>
            <div class="text-h4 q-mt-sm q-mb-xs indent">
              {{ activity.title }}
            </div>
            <div class="text-h5 indent">{{ activity.description }}</div>
            <div class="text-h6 text-bold text-right">
              {{ activity.address }}
            </div>
          </q-card-section>
          <q-space />
          <q-list bordered class="rounded-borders text-h5 bg">
            <q-expansion-item
              expand-separator
              icon="more_horiz"
              label="Узнать больше"
            >
              <q-card class="q-pa-md">
                <q-card-section class="text-justify text-h5 q-py-sm indent">{{
                  activity.details
                }}</q-card-section>
              </q-card>
            </q-expansion-item>
            <q-expansion-item
              expand-separator
              icon="map"
              label="Как добраться?"
            >
              <q-card class="q-pa-md">
                <q-card-section class="text-justify text-h5 q-py-sm indent">{{
                  activity.directions
                }}</q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
        </q-card>
      </div>
    </div>
    <q-card class="aside">
      <p class="aside_title">Развлечения в Ялте</p>
      <q-separator size="3px" color="black" width="90%" class="q-mx-auto" />
      <q-list>
        <q-item class="aside_item"
          v-for="(activity, index) in activities"
          :key="'link-' + index"
          clickable
          v-ripple
          @click="scrollToActivity(index)"
        >
          {{ activity.title }}
        </q-item>
      </q-list>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      activities: [
        {
          img: "Атлантида.png",
          title: "Аквапарк «Атлантида»",
          description: "Незабываемые водные приключения для всей семьи.",
          address: "ул. Коммунаров, 7",
          details:
            "Аквапарк «Атлантида» предлагает множество аттракционов, горок и бассейнов для детей и взрослых. Также здесь есть кафе и зоны отдыха.",
          directions:
            "До аквапарка можно добраться на автобусе №7 от центрального вокзала или на такси.",
        },
        {
          img: "Сказка.png",
          title: "Ялтинский зоопарк «Сказка»",
          description: "Увлекательное место для знакомства с животными.",
          address: "ул. Зоологическая, 12",
          details:
            "Ялтинский зоопарк «Сказка» славится разнообразием животных и интерактивными зонами, где можно покормить питомцев. Зоопарк подходит для посещения с детьми.",
          directions:
            "Зоопарк находится в 10 минутах езды на автобусе №3 от центрального вокзала.",
        },
        {
          img: "Акватория.png",
          title: "Дельфинарий «Акватория»",
          description: "Шоу с участием дельфинов и морских котиков.",
          address: "ул. Дельфинария, 1",
          details:
            "В дельфинарии «Акватория» проходят увлекательные шоу-программы с участием дельфинов и морских котиков. Также есть возможность поплавать с дельфинами.",
          directions:
            "До дельфинария можно добраться на автобусе №2 или №5 от центрального вокзала.",
        },
        {
          img: "Канатка.png",
          title: "Канатная дорога на Ай-Петри",
          description: "Потрясающие виды с высоты птичьего полета.",
          address: "ул. Мисхорская, 1",
          details:
            "Канатная дорога на Ай-Петри предлагает захватывающий подъем на вершину горы с великолепными панорамными видами на побережье и горы.",
          directions:
            "До нижней станции канатной дороги можно добраться на автобусе №30 от центрального вокзала.",
        },
        {
          img: "Ботанический сад.png",
          title: "Никитский ботанический сад",
          description: "Удивительный мир растений и цветов.",
          address: "пгт Никита, ул. Ботаническая, 1",
          details:
            "Никитский ботанический сад — одно из старейших ботанических учреждений в России, где собраны редкие и экзотические растения со всего мира.",
          directions:
            "До ботанического сада можно доехать на автобусе №29 или на такси.",
        },
        {
          img: "Морские прогулки.png",
          title: "Морские прогулки на яхте",
          description: "Незабываемые морские прогулки и круизы.",
          address: "Ялтинский морской порт",
          details:
            "Морские прогулки на яхте предлагают возможность насладиться живописными видами побережья Ялты, поплавать в открытом море и ощутить морской бриз.",
          directions:
            "Яхты отправляются из Ялтинского морского порта, до которого можно добраться на любом городском транспорте.",
        },
      ],
    };
  },
  methods: {
    scrollToActivity(index) {
      const element = document.getElementById("activity-" + index);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style scoped>
.my_card {
  width: 100%;
}
</style>
