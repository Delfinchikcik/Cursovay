<template>
  <div class="container_bg">
    <div class="containerPage">
      <q-carousel
        height="100%"
        swipeable
        animated
        v-model="slide"
        thumbnails
        infinite
        :interval="4000"
      >
        <q-carousel-slide
          v-for="n in 8"
          :key="n"
          :name="`slide-${n}`"
          :img-src="`ЯлтаСлайдер${n}.png`"
          class="rounded-borders carousel-slide"
        >
        </q-carousel-slide>
      </q-carousel>
    </div>
    <div class="container q-py-md">
      <q-card class="my-card" flat bordered>
        <div class="q-pa-md text-h2 text-center">
          Добро пожаловать в город счастья!
        </div>
        <q-separator class="separator" color="black" size="6px" spaced="12px" />
        <q-card-section >
          <div class="text-h4 text-center q-mb-md">
            Добро пожаловать в Ялту — жемчужину Крыма, утопающую в зелени гор и
            ласкаемую теплыми водами Черного моря. Этот уютный и живописный
            город, расположенный на южном берегу Крыма, является одним из самых
            известных курортов в России, привлекая туристов своей уникальной
            природой, богатой историей и разнообразными культурными
            достопримечательностями.
          </div>
        </q-card-section>
      </q-card>
      <q-card class="q-my-md my-card">
        <p class="text-h4 q-pt-md text-center text-bold">
          Что делает Ялту особенной?
        </p>
        <q-list bordered class="rounded-borders text-h4 bg">
          <q-expansion-item
            expand-separator
            icon="nature_people"
            label="Природнае красоты"
           >
            <q-card class="q-pa-md">
              <q-card-section class="text-justify q-py-sm indent">
                Море и пляжи: Ялта гордится своими чистыми пляжами и кристально
                прозрачной водой. Отдых на морском побережье подарит вам
                незабываемые впечатления и возможность насладиться солнечными
                ваннами.
              </q-card-section>
              <q-card-section class="text-justify q-py-sm indent">
                Горы и леса: Окруженная величественными горами, Ялта является
                идеальным местом для любителей пеших прогулок и активного
                отдыха. Ай-Петри, гора Могаби и другие вершины предлагают
                потрясающие виды и множество туристических маршрутов.
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item
            expand-separator
            icon="history"
            label="Историческое наследие"
          >
            <q-card class="q-pa-md">
              <q-card-section class="text-justify q-py-sm indent">
                Дворцы и виллы: Ливадийский дворец, Воронцовский дворец и
                множество других архитектурных шедевров погружают вас в
                атмосферу царской России и аристократического прошлого.
              </q-card-section>
              <q-card-section class="text-justify q-py-sm indent">
                Ялтинская конференция: Город знаменит проведением Ялтинской
                конференции 1945 года, когда здесь встретились лидеры
                антигитлеровской коалиции для обсуждения послевоенного
                устройства мира.
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item
            expand-separator
            icon="event"
            label="Культурные мероприятия"
          >
            <q-card class="q-pa-md">
              <q-card-section class="text-justify q-py-sm indent">
                Фестивали и концерты: Ялта славится своими музыкальными и
                культурными фестивалями, привлекающими артистов и зрителей со
                всего мира.
              </q-card-section>
              <q-card-section class="text-justify q-py-sm indent">
                Выставки и галереи: Многочисленные выставочные залы и
                художественные галереи предлагают ознакомиться с произведениями
                искусства местных и международных мастеров.
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
      </q-card>

      <q-card class="q-my-md my-card">
        <q-card-section class="text-h4 text-bold text-center"
          >Что можно посомтреть в Ялте?</q-card-section
        >
        <div class="col-2 flex justify-around q-pa-md">
          <a href="/#/SightsPage" target="_blank" style="width: 30%">
            <q-img class="image_ref" src="ЯлтаСлайдер1.png">
              <div class="absolute-full text-h6 flex flex-center">
                Ласточкино гнездо
              </div>
            </q-img>
          </a>
          <a href="/#/SightsPage" target="_blank" style="width: 30%">
            <q-img
              class="image_ref"
              height="100%"
              src="Массандровский Дворец.png"
            >
              <div class="absolute-full text-h6 flex flex-center">
                Массандровский дворец
              </div>
            </q-img>
          </a>
          <a href="/#/SightsPage" target="_blank" style="width: 30%">
            <q-img class="image_ref" src="Ботанический сад.png">
              <div class="absolute-full text-h6 flex flex-center">
                Ботанический сад
              </div>
            </q-img>
          </a>
          <q-btn href="/#/SightsPage" class="sights_btn">Смотреть еще</q-btn>
        </div>
      </q-card>

      <q-card class="my-card" flat bordered>
        <p class="text-h4 q-pt-md text-center q-mb-none text-bold">
          Пляжи Ялты
        </p>
        <q-card-section>
          <div class="text-h4 text-justify indent q-pa-md">
            Ялтинские пляжи – это настоящие оазисы отдыха и удовольствия. Чистый
            песок и мелкая галька, кристально чистая вода Черного моря и удобная
            инфраструктура делают их идеальным местом для семейного отдыха,
            романтических прогулок и активного времяпрепровождения. Город
            предлагает разнообразие пляжей на любой вкус: от уединенных уголков
            до оживленных зон с множеством кафе и развлечений.
          </div>
        </q-card-section>
      </q-card>

      <q-card class="my-card">
        <q-card-section class="text-h4 text-bold text-center"
          >Топ городских пляжей города</q-card-section
        >
        <div class="col-2 flex justify-around q-pa-md">
          <a href="/#/BeachPage" target="_blank" style="width: 30%">
            <q-img
              class="image_ref"
              height="100%"
              src="Массандровский пляж.png"
            >
              <div class="absolute-full text-h6 flex flex-center">
                Массандровский пляж
              </div>
            </q-img>
          </a>
          <a href="/#/BeachPage" target="_blank" style="width: 30%">
            <q-img class="image_ref" height="100%" src="Приморский пляж.png">
              <div class="absolute-full text-h6 flex flex-center">
                Приморский пляж
              </div>
            </q-img>
          </a>
          <a href="/#/BeachPage" target="_blank" style="width: 30%">
            <q-img class="image_ref" src="Пляж дельфин.png">
              <div class="absolute-full text-h6 flex flex-center">
                Пляж "Дельфин"
              </div>
            </q-img>
          </a>
          <q-btn href="#/BeachPage" class="sights_btn">Смотреть еще</q-btn>
        </div>
      </q-card>

      <q-card class="my-card q-my-md" bordered>
        <p class="text-h4 text-bold q-pa-md text-center">
          Основные туристические локации Ялты
        </p>
        <q-card bordered>
          <q-img src="\map.png"> </q-img>
        </q-card>
      </q-card>

      <q-card class="my-form">
        <q-card-section>
          <div class="text-h4 text-center"> <q-icon name="star" color="yellow"/> Оставьте ваш отзыв и пожелания <q-icon name="star" color="yellow"/> </div>
        </q-card-section>

        <q-card-section>
          <q-form @submit="onSubmit" @reset="onReset" ref="form">
            <q-input class="q-ma-md text-h5"
              v-model="form.name"
              label="Имя"
              outlined
              required
            ></q-input>
            <q-input class="q-ma-md text-h5"
              v-model="form.email"
              type="email"
              label="Email"
              outlined
              required
            ></q-input>
            <q-input class="q-ma-md text-h5 text-area"
              v-model="form.message"
              type="textarea"
              label="Сообщение"
              outlined
              required
              autogrow
            ></q-input>

            <q-btn
              type="submit"
              label="Отправить"
              color="primary"
              class="q-mt-md q-ml-md"
            ></q-btn>
            <q-btn
              type="reset"
              label="Сбросить"
              color="secondary"
              flat
              class="q-mt-md q-ml-sm"
            ></q-btn>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: "slide-1",
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  created() {
    this.startCarousel();
  },
  methods: {
    startCarousel() {
      let slideIndex = 1;
      setInterval(() => {
        slideIndex++;
        if (slideIndex > 8) slideIndex = 1;
        this.slide = `slide-${slideIndex}`;
      }, 4000);
    },
    onSubmit() {
      if (this.$refs.form.validate()) {
        // Отправка данных формы
        alert('Ваш отзыв отправлен! Спасибо!');
        this.onReset();
      }
    },
    onReset() {
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    },
  },
};
</script>

<style >
.containerPage {
  width: 100vw;
  height: 80vh;
  margin: 0 auto;
}
.carousel-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.paralax {
  margin: 0 auto;
}

.text-m {
  font-size: 4.5rem;
  text-align: center;
  color: white;
}
.my-card {
  border-radius: 16px;
}
.separator {
  margin: 0 40px;
  border-radius: 10px;
}
.sights_btn {
  background-color: rgb(19, 120, 202);
  margin: 16px auto;
  font-size: 20px;
}
.image_ref {
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3), 0 6px 6px rgba(0, 0, 0, 0.23);
  transition: transform 0.3s, box-shadow 0.3s;
}

.image_ref:hover {
  transform: scale(1.2);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4), 0 10px 10px rgba(0, 0, 0, 0.25);
}
.my-form {
  max-width: 700px;
  margin: 0 auto;
  border-radius: 20px;
}
</style>
