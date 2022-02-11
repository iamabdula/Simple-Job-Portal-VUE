<template>
<div class="home-page">

  <div class="home-content">
      <h1>Home Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perferendis et temporibus voluptates ex, ipsum ab maiores ratione! Blanditiis consequatur dicta, repudiandae fuga ducimus saepe eius porro facere atque rem natus laudantium ad. Impedit accusantium necessitatibus corrupti voluptatum in rerum, deleniti qui blanditiis soluta vel sit labore nesciunt eveniet voluptas, sed porro sapiente adipisci. Quam vel accusamus, iusto doloremque laboriosam numquam fugiat excepturi, dicta deserunt, dolorum alias dolore tempore nesciunt veniam mollitia enim velit. Vel maiores mollitia beatae sed laboriosam veritatis saepe reprehenderit quibusdam, ipsa tempore voluptates aperiam! Culpa quaerat ducimus error hic accusamus non illum voluptas ut iure harum.</p>
  </div>
  <div class="picture">
    <img src="https://picsum.photos/300" >
  </div>
</div>

<div class="home-page">

  <div class="home-content">
      <h1>Home Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perferendis et temporibus voluptates ex, ipsum ab maiores ratione! Blanditiis consequatur dicta, repudiandae fuga ducimus saepe eius porro facere atque rem natus laudantium ad. Impedit accusantium necessitatibus corrupti voluptatum in rerum, deleniti qui blanditiis soluta vel sit labore nesciunt eveniet voluptas, sed porro sapiente adipisci. Quam vel accusamus, iusto doloremque laboriosam numquam fugiat excepturi, dicta deserunt, dolorum alias dolore tempore nesciunt veniam mollitia enim velit. Vel maiores mollitia beatae sed laboriosam veritatis saepe reprehenderit quibusdam, ipsa tempore voluptates aperiam! Culpa quaerat ducimus error hic accusamus non illum voluptas ut iure harum.</p>
  </div>
  <div class="picture">
    <img src="https://picsum.photos/300" >
  </div>
</div>

<div class="home-page">

  <div class="home-content">
      <h1>Home Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perferendis et temporibus voluptates ex, ipsum ab maiores ratione! Blanditiis consequatur dicta, repudiandae fuga ducimus saepe eius porro facere atque rem natus laudantium ad. Impedit accusantium necessitatibus corrupti voluptatum in rerum, deleniti qui blanditiis soluta vel sit labore nesciunt eveniet voluptas, sed porro sapiente adipisci. Quam vel accusamus, iusto doloremque laboriosam numquam fugiat excepturi, dicta deserunt, dolorum alias dolore tempore nesciunt veniam mollitia enim velit. Vel maiores mollitia beatae sed laboriosam veritatis saepe reprehenderit quibusdam, ipsa tempore voluptates aperiam! Culpa quaerat ducimus error hic accusamus non illum voluptas ut iure harum.</p>
  </div>
  <div class="picture">
    <img src="https://picsum.photos/300" >
  </div>
</div>


</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped>
.home-content p{
  padding: 0 20px;
  margin: 0 100px;
  border-right: 1px solid gray;
  border-left: 1px solid gray;

}
.home-page{
  margin-top: 0%;
  display: flex;
  flex-direction: row;
}
.picture{
     margin-top: 3%;
    margin-right: 100px;
    border: 10px solid #243342;
    height: 265px;

}
.picture img{
      height: 265px;
}
</style>