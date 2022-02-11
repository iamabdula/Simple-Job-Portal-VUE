<template>
  <div id="container">
    <div id="contacts">
      <div id="contacts--contact">
        <h4>{{ mail }}</h4>
        <h4>{{ phone }}</h4>
      </div>
      <div id="contacts--social">
        <div>
            <img src="../assets/fb.png" width="32px">
        </div>
          <div>
            <img src="../assets/gmail.png" width="32px">
        </div>
        <div><svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="#006AFF" class="bi bi-messenger" viewBox="0 0 16 16">
          <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z"/>
        </svg></div>
      </div>
    </div>
    <div id="mentions">
      <a>{{ mention }}</a>
    </div>
   </div>

</template>

<script>

export default {
 data(){
    return{
      mail : 'abdullah.masood@gmail.com',
      phone : '+92 320 1231234',
      mention : '2022 | All rights reserved'
    }
  }

}

</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

body{
  display:flex;
  /* height:160vh; */
  justify-content:center;
  align-items:flex-end;
  font-family:Open Sans;
}

#container{
    padding-top: 30px;
    padding-bottom: 30px;
    
    margin-top: 40px;

    width: 100vw;
    color: white;
    background: #2c3e50;
    display: flex;
    flex-direction: column;
    align-items: center;
}
#contacts{
  display:flex;
  justify-content:space-around;
  align-items:center;
  width:100%;
}
#contacts--contact{
  text-align:right;
}
#contacts--social{
  width:20%;
  display : flex;
  justify-content : space-between;
}
#contacts--social div{
  height:30px;
  width:29px;
  background: #2c3e50;
  border-radius:50%;
}
#mentions p {
  font-size:0.5em;
}
</style>