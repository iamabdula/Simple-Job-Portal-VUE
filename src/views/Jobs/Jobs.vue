<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id" class="job">
       <router-link :to="{name : 'JobDetails', params:{id : job.id}}">   <h2>{{job.title}}</h2>
       </router-link>
  </div>
</template>

<script>
export default {
    // props:['title'],

    data(){
        return{
            jobs: [
            {title: 'Web Developer', id: 1, details:"Vue, React, Angular"},
            {title: 'Android Developer', id: 2, details:"Android, Java, Kotlin"},
            {title: 'ML Engineer', id: 3, details:"Python, Numpy, Pandas"},
            {title: 'UX Designer', id: 4, details:"User experiance"},
            ]
        }
    }
}
</script>

<style>

.job h2{
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
    

}
.job h2:hover{
    background: #ddd;

}
.job a{
    text-decoration: none;
}

</style>