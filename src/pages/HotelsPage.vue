<template>
  <div class="container_bg">
  <div class="q-pa-md row items-start q-gutter-md container">
    <q-card class="my-card" flat bordered>
      <q-img class="card_foto" src="\Крымский_Бриз.png" />
      <q-card-section>
        <q-btn href="https://yandex.ru/maps/org/krymskiy_briz/1323868121/?ll=33.919819%2C44.402302&z=17.07"
        target="blank"
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%)"
        />
        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">Крымский Бриз</div>
          <div
            class="col-auto text-grey text-caption q-pt-md row no-wrap items-center km"
          >
            <q-icon name="place" />
            20км
          </div>
        </div>
        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>
      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">Гостиница 5<q-icon name="star" color="red" ></q-icon></div>
        <div class="text-caption description">
          Резиденция Крымский Бриз 5* — официально расположена на Южном побережье Крыма в курортном поселке Парковое, всего в 30 км от Ялты. Пятизвездочный отель находится в окружении первозданной природы, живописных кипарисов, вечнозеленых растений и Крымских гор.
Отель Крымский Бриз соответствует классу 5* и располагает различными вариантами размещения, в нем доступны комфортабельные номера категорий от «Стандарт» до «Люкс», а также «Апартаменты» и комплекс роскошных вилл в средиземноморском стиле.
        </div>
      </q-card-section>
      <q-separator/>
      <q-card-actions>
        <q-btn class="description" href="https://crimeabreeze.com/" target="blank" flat color="blue"> Подробнее </q-btn>
      </q-card-actions>
    </q-card>
    <q-card class="my-card" flat bordered>
      <q-img class="card_foto" src="Мрия.png" />
      <q-card-section>
        <q-btn href="https://yandex.ru/maps/org/mriya_resort_spa/1303073708/?ll=33.939502%2C44.397305&z=17.07"
        target="blank"
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%)"
        />
        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">Мрия</div>
          <div
            class="col-auto text-grey text-caption q-pt-md row no-wrap items-center km"
          >
            <q-icon name="place" />
            15км
          </div>
        </div>
        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>
      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">Гостиница 5<q-icon name="star" color="red" ></q-icon></div>
        <div class="text-caption description">
          Mriya Resort & SPA - курорт премиум-класса в Крыму, включающий в себя пятизвездочный отель, медицинский и SPA-центры международного уровня, современный конгресс-центр.

Концепцию и детали проекта разрабатывал культовый британский архитектор сэр Норман Фостер, победитель Императорской и Притцкеровской премий.

Всего за несколько лет работы курорт Mriya Resort & SPA получил высшее признание на российском и мировом туристическом рынке.

Особое внимание уделяется семейному отдыху, для которого на территории курорта созданы все условия. Медицинский центр круглогодичного курорта «Mriya Resort & SPA» располагает современнейшим оборудованием и высококвалифицированным персоналом, что позволяет не только проводить диагностические исследования, но и предоставлять лечебно-реабилитационные услуги.
        </div>
      </q-card-section>
      <q-separator />
      <q-card-actions>
        <q-btn class="description" href="https://mriyaresort.com/" target="blank" flat color="blue"> Подробнее </q-btn>
      </q-card-actions>
    </q-card>
    <q-card class="my-card" flat bordered>
      <q-img class="card_foto" src="\Интурист.png" />
      <q-card-section>
        <q-btn href="https://yandex.ru/maps/org/yalta_inturist/70863104600/?ll=34.155221%2C44.502989&z=13.98"
        target="blank"
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%)"
        />
        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">Интурист</div>
          <div
            class="col-auto text-grey text-caption q-pt-md row no-wrap items-center km"
          >
            <q-icon name="place" />
            5км
          </div>
        </div>
        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>
      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">Гостиница 4<q-icon name="star" color="red" ></q-icon></div>
        <div class="text-caption description">
          Отель Yalta Intourist – крупнейший курортный комплекс Крыма, расположенный на берегу Черного моря, у подножия Ялтинских гор и в окружении вековой зелени Массандровского парка. Отель входит в сеть отелей Marins Hotels и круглый год радует гостей полуострова теплым приемом, безупречным обслуживанием, атмосферой доброжелательности, радушия и заботы.

В уютных номерах основного корпуса и эко-территории Green Park есть все необходимое для Вашего комфортного отдыха: удобная мебель, TV, сейф, Wi-Fi, кондиционер и, конечно же, сказочный вид. 
        </div>
      </q-card-section>
      <q-separator />
      <q-card-actions>
        <q-btn class="description" href="https://yaltaintourist.ru/" target="blank" flat color="blue"> Подробнее </q-btn>
      </q-card-actions>
    </q-card>
    <q-card class="my-card" flat bordered>
      <q-img class="card_foto" src="\Villa_Elena.png" />
      <q-card-section>
        <q-btn href="https://yandex.ru/maps/org/villa_elena/1175904286/?ll=34.166382%2C44.494171&mode=search&sctx=ZAAAAAgBEAAaKAoSCaWeBaG89UBAEcWOxqF%2BM0ZAEhIJY%2FIGmPkOjj8Rgh3%2FBYIAeT8iBgABAgMEBSgKOABA9%2F8GSABqAnJ1nQHNzEw9oAEAqAEAvQF24RfQwgEFnsDbsASCAhXQstC40LvQu9CwINC10LvQtdC90LCKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=34.164406%2C44.494171&sspn=0.014779%2C0.006136&text=dbkkf%20tktyf&z=17.06"
        target="blank"
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%)"
        />
        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">Вилла Елена</div>
          <div
            class="col-auto text-grey text-caption q-pt-md row no-wrap items-center km"
          >
            <q-icon name="place" />
            500м
          </div>
        </div>
        <q-rating v-model="stars4" :max="5" size="32px" />
      </q-card-section>
      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">Гостиница 5<q-icon name="star" color="red"/> </div>
        <div class="text-caption description">
          Ценителей роскоши и комфорта ждут прекрасные отели Крыма 5 звезд, среди которых особое место занимает «Вилла Елена». Отель расположен на второй линии Ялтинской набережной, рядом с историческим особняком, который является ровесником Ливадийского дворца и одним из главных украшений города. Переступая порог его закрытой территории, которая утопает в зелени и цветах, гости попадают в особый мир домашнего уюта и тепла, в уникальную атмосферу гостеприимства. Незабываемые впечатления от отдыха в «Вилла Елена» сравнимы лишь с лучшими европейскими курортами. 
          Вилла Елена, одна из старейших гостиниц Ялты, расположена в самом центре, в 5 минутах ходьбы от пляжа. 
        </div>
      </q-card-section>
      <q-separator />
      <q-card-actions>
        <q-btn class="description" href="https://villaelenahotel.ru/" target="blank" flat color="blue"> Подробнее </q-btn>
      </q-card-actions>
    </q-card>
    <q-card class="my-card" flat bordered>
      <q-img class="card_foto" src="Бристоль.png" />
      <q-card-section>
        <q-btn href="https://yandex.ru/maps/org/bristol/112742979846/?ll=34.171986%2C44.496161&z=17.07"
        target="blank"
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%)"
        />
        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">Бристоль</div>
          <div
            class="col-auto text-grey text-caption q-pt-md row no-wrap items-center km"
          >
            <q-icon name="place" />
            1км
          </div>
        </div>
        <q-rating v-model="stars5" :max="5" size="32px" />
      </q-card-section>
      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">Гостиница 3<q-icon name="star" color="red"/></div>
        <div class="text-caption description">
          Гостиница «Бристоль» состоит из 2-х зданий: исторического и современного. Исторический корпус, построенный в середине XIX в., порадует классической атмосферой и привычным домашним уютом. Современный корпус, открытый в 2017 г., отличается просторными элегантными номерами с отличным видом на горы, море и ялтинскую набережную. На Ваш выбор 12 категорий: от стандартных однокомнатных номеров, до двухэтажных номеров «Duplex Suite».
        </div>
      </q-card-section>
      <q-separator />
      <q-card-actions>
        <q-btn class="description" href="https://bristol-yalta.ru/" target="blank" flat color="blue"> Подробнее </q-btn>
      </q-card-actions>
    </q-card>
    <q-card class="my-card" flat bordered>
      <q-img class="card_foto" src="Ореанда.png" />
      <q-card-section>
        <q-btn href="https://yandex.ru/maps/org/oreanda_resort_spa/1383373054/?ll=34.169928%2C44.493050&mode=search&sctx=ZAAAAAgBEAAaKAoSCVevIqMDFkFAEXxGIjSCP0ZAEhIJY%2FIGmPkOjj8Rzas6qwX2eD8iBgABAgMEBSgKOABAzllIAGoCcnWdAc3MTD2gAQCoAQC9Ab8YEXDCAQX%2BsdKTBYICDtC%2B0YDQtdCw0L3QtNCwigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=34.169928%2C44.493050&sspn=0.032797%2C0.013618&text=jhtfylf&z=15.91"
        target="blank"
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%)"
        />
        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">Премьер отель Ореанда</div>
          <div
            class="col-auto text-grey text-caption q-pt-md row no-wrap items-center km"
          >
            <q-icon name="place" />
            1км
          </div>
        </div>
        <q-rating v-model="stars6" :max="5" size="32px" />
      </q-card-section>
      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">Гостиница 4<q-icon name="star" color="red"/></div>
        <div class="text-caption description">
          Распахнув двери в 1907 году, уже более ста лет «Ореанда» Премьер Отель поддерживает реноме самой модной и респектабельной частной гостиницы Ялты, объединяя под своей крышей легендарный отель, SPA-клуб, популярный развлекательный центр и признанный морской курорт. В «Ореанда» Премьер Отеле вы почувствуете, что отдых в Крыму – это заряд энергии на весь год, а отдых в Ялте – неповторимое сочетание целебной природы и ярких впечатлений.
        </div>
      </q-card-section>
      <q-separator />
      <q-card-actions>
        <q-btn class="description" target="blank" href="https://www.hotel-oreanda.com/" flat color="blue"> Подробнее </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</div>
</template>

<script setup>
import { ref } from "vue";

const stars = ref(5);
const stars2 = ref(5);
const stars3 = ref(4);
const stars4 = ref(5);
const stars5 = ref(3);
const stars6 = ref(4);
</script>

<style scoped>
.my-card{
  width: 100%;
  max-width: 90%;
  box-shadow: 20px 18px 10px rgba(0, 0, 0, 0.1), 10px 4px 8px rgba(2, 3, 3, 0.1) !important;
  border-radius: 14px;
  margin: 10px auto;
}
.description{
  font-size: 20px;
  line-height: 28px;
  text-align: justify;
}
.km{
  font-size: 16px;
}

.card_foto{
  height: 50vh;
}
</style>

