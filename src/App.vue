<template>
  <body>
    <div class="paper">
      <div class="sendData">
        <textarea class="inputData" v-model="visits" placeholder="Посещение"></textarea>
        <textarea class="inputData" v-model="complaint" placeholder="Жалобы"></textarea>
        <textarea class="inputData" v-model="anamnesis" placeholder="Анамнез заболевания"></textarea>
        <textarea class="inputData" v-model="objective_status" placeholder="Объективный статус"></textarea>
        <textarea class="inputData" v-model="diagnosis_details" placeholder="Диагноз основной"></textarea>
        <textarea class="inputData" v-model="recommendations" placeholder="Рекомендации, назначения"></textarea>
        
        <!--тут функцию поменяла-->
        <button class="btnSend" @click="handleButtonClick">Отправить</button>
      </div>
  </div>
  <div class="recommend">
    <div v-if="vectorSearchData && vectorSearchData.length">     
      <div v-for="(item, index) in vectorSearchData">
        <div class="recomend_card">
          <div class="recomend_card_item"><p>Посещение</p></div>
          <div class="recomend_card_item"><p>Жалоба</p></div>
          <div class="recomend_card_item"><p>Анамнез заболевания</p></div>
          <div class="recomend_card_item"><p>Объективный статус: {{ item.objective_status }}</p></div>
          <div class="recomend_card_item"><p>Диагноз основной: {{ item.diagnosis_details }}</p></div>
          <div class="recomend_card_item"><p>Рекомендации, назначения</p></div>
        </div>
      </div>
    </div>
  </div>
</body>
</template>

<script>
  import axios from 'axios'

  export default{
    data(){
      return{
        visits : 0, //Посещение
        complaint : '', //Жалобы
        anamnesis : '', //Анамнез
        objective_status : '', //Объективный статус
        diagnosis_details : '', //Диагноз основной
        recommendations : '', //Рекомендации

        dataServer: null,
        responseServer:null,
        vectorSearchData:null
      }
    },
    methods: {
      async fetchData() {
        const response = await axios.get('http://127.0.0.1:5000/');
        this.dataServer = response.data;
        // console.log(response.data);
      },
      async postFunc() {
        
        //отправка запроса на сервер
        const response = await axios.post('http://127.0.0.1:5000/preddiagnose', {
          visits : this.visits,
          complaint : this.complaint,
          anamnesis : this.anamnesis,
          objective_status : this.objective_status,
          diagnosis_details : this.diagnosis_details,
          recommendations : this.recommendations
        });

        //Обработка полученных данных;
        this.dataServer = response.data['response'];
        this.vectorSearchData = response.data['vector_search'];
        // console.log(response.data);
        // console.log(this.vectorSearchData);
        // for(let i = 0; i < this.vectorSearchData.lenght; i++){
        //   console.log(this.vectorSearchData[i]);
        // }
      },
      //Снести нахер и поменять название в вызове, если ломается
      async handleButtonClick(){ 
        await this.postFunc();
        window.scrollBy({
          top: window.innerHeight,
          behavior: 'smooth'
        });
      }
    }
  };
</script>


<style scoped>

</style>
