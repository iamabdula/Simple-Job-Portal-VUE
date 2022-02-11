 <template>
<h1>Job Detail:</h1>  
<p>Job id is : {{id}}</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, eligendi. Cumque fugit quaerat beatae placeat ullam rem id reprehenderit molestias nihil. Voluptate, harum. Architecto enim nostrum rerum ab, eligendi voluptas quam corporis blanditiis suscipit voluptate praesentium quis fugit asperiores magni numquam. Esse iste ducimus tenetur eum nisi ad id officiis. Distinctio illo blanditiis, officiis inventore voluptatum non, quo dolore magni dolor suscipit dolorem, exercitationem repellat vero eum molestiae enim tenetur. Incidunt dolores vel quidem nihil quibusdam repellat cupiditate eos harum, possimus totam quia laborum at. Quod itaque nulla soluta inventore illum odio. Dolor, dolorum illum quaerat deserunt sunt eaque! Optio aut at dolorum assumenda adipisci illum fuga, officiis beatae nihil quaerat sint, nesciunt ut culpa sapiente, explicabo velit obcaecati ratione aliquid quas. Officia sapiente rem, cupiditate ducimus alias culpa id totam! Nobis ad porro assumenda voluptate eveniet, recusandae delectus sint, consequuntur nostrum aliquam totam harum possimus ea! Deserunt harum et odit repellendus ipsam cumque sit, dignissimos a laudantium qui minus reprehenderit eius. Voluptatibus cumque, reiciendis obcaecati repellendus non velit aliquid ipsum veritatis assumenda facilis alias, nulla distinctio quod, in similique atque quae pariatur placeat ea! Et eligendi minima maiores a ipsum sit molestiae placeat similique libero commodi unde labore ex, architecto rem dolores delectus mollitia, repudiandae quia maxime vitae ad necessitatibus, totam aut! Tempore doloremque numquam nihil laboriosam laudantium dolorem dolor velit corrupti, veniam sed odio dolore illum qui esse? Sunt quo debitis fuga earum ipsam distinctio sed ratione rerum dolorem reiciendis? Perferendis blanditiis, explicabo dolorem aperiam maiores perspiciatis voluptas.  </p>
<!-- <p>Job Title : {{title}}</p> -->


</template>

<script>
export default {
    data(){
        return{
            id: this.$route.params.id,
          

        }
    }
}
</script>

<style>
 p{
  padding: 0 20px;
  margin: 0 100px;
  border-right: 1px solid gray;
  border-left: 1px solid gray;

}
</style>