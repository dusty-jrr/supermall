<template>
  <!-- <h2>分类</h2> -->
  <div class="wrapper" ref="aaaa">
    <!-- 无论是否设置click:false,button都可以点击 -->
    <!-- 必须设置click:false,那么div才能监听点击 -->

    <ul class="content">
      <button @click="btnClick">按钮</button>
      <li>分类的列表1</li>
      <li>分类的列表2</li>
      <li>分类的列表3</li>
      <li>分类的列表4</li>
      <li>分类的列表5</li>
      <li>分类的列表6</li>
      <li>分类的列表7</li>
      <li>分类的列表8</li>
      <li>分类的列表9</li>
      <li>分类的列表10</li>
      <li>分类的列表11</li>
      <li>分类的列表12</li>
      <li>分类的列表13</li>
      <li>分类的列表14</li>
      <li>分类的列表15</li>
      <li>分类的列表16</li>
      <li>分类的列表17</li>
      <li>分类的列表18</li>
      <li>分类的列表19</li>
      <li>分类的列表20</li>
      <li>分类的列表21</li>
      <li>分类的列表22</li>
      <li>分类的列表23</li>
      <li>分类的列表24</li>
      <li>分类的列表25</li>
      <li>分类的列表26</li>
      <li>分类的列表27</li>
      <li>分类的列表28</li>
      <li>分类的列表29</li>
      <li>分类的列表30</li>
      <li>分类的列表31</li>
      <li>分类的列表32</li>
      <li>分类的列表33</li>
      <li>分类的列表34</li>
      <li>分类的列表35</li>
      <li>分类的列表36</li>
      <li>分类的列表37</li>
      <li>分类的列表38</li>
      <li>分类的列表39</li>
      <li>分类的列表40</li>
      <li>分类的列表41</li>
      <li>分类的列表42</li>
      <li>分类的列表43</li>
      <li>分类的列表44</li>
      <li>分类的列表45</li>
      <li>分类的列表46</li>
      <li>分类的列表47</li>
      <li>分类的列表48</li>
      <li>分类的列表49</li>
      <li>分类的列表50</li>
      <li>分类的列表51</li>
      <li>分类的列表52</li>
      <li>分类的列表53</li>
      <li>分类的列表54</li>
      <li>分类的列表55</li>
      <li>分类的列表56</li>
      <li>分类的列表57</li>
      <li>分类的列表58</li>
      <li>分类的列表59</li>
      <li>分类的列表60</li>
      <li>分类的列表61</li>
      <li>分类的列表62</li>
      <li>分类的列表63</li>
      <li>分类的列表64</li>
      <li>分类的列表65</li>
      <li>分类的列表66</li>
      <li>分类的列表67</li>
      <li>分类的列表68</li>
      <li>分类的列表69</li>
      <li>分类的列表70</li>
      <li>分类的列表71</li>
      <li>分类的列表72</li>
      <li>分类的列表73</li>
      <li>分类的列表74</li>
      <li>分类的列表75</li>
      <li>分类的列表76</li>
      <li>分类的列表77</li>
      <li>分类的列表78</li>
      <li>分类的列表79</li>
      <li>分类的列表80</li>
      <li>分类的列表81</li>
      <li>分类的列表82</li>
      <li>分类的列表83</li>
      <li>分类的列表84</li>
      <li>分类的列表85</li>
      <li>分类的列表86</li>
      <li>分类的列表87</li>
      <li>分类的列表88</li>
      <li>分类的列表89</li>
      <li>分类的列表90</li>
      <li>分类的列表91</li>
      <li>分类的列表92</li>
      <li>分类的列表93</li>
      <li>分类的列表94</li>
      <li>分类的列表95</li>
      <li>分类的列表96</li>
      <li>分类的列表97</li>
      <li>分类的列表98</li>
      <li>分类的列表99</li>
      <li>分类的列表100</li>
    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name:'Category',
    data() {
      return {
        scroll:0,
      }
    },
 
    created(){

    },
    //组件创建完后调用
    mounted() {
      console.log(this.$refs.aaaa);
      console.log(document.querySelector('.wrapper'));
      this.scroll = new BScroll(document.querySelector('.wrapper'), {
        probeType:3,
        pullUpLoad:true,
      })

      this.scroll.on('scroll',(postion)=>{
        // console.log(postion);
      })

      this.scroll.on('pullingUp',()=>{
        console.log('上拉加载更多');
      })
    },
    methods: {
      btnClick(){
        console.log('btnClick');
      }
    },
  }
</script>

<style scoped>
.wrapper {
  height: 150px;
  background-color: red;

  overflow: hidden;
  /* overflow-y: scroll; */
}
</style>
