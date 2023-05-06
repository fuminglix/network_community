<template>
    <div class="discoverMain-container">
        <div class="discoverMain-student-container">
            <div class="discoverMain-student-content">
                <div class="discoverMain-student-title">
                    <span>学生时期的疑惑让过来人和你分享经验吧！</span>
                </div>
                <div class="discoverMain-student-info">
                    <div class="discoverMain-student-info-left">
                        <div class="student-info-title">
                            <span>中学</span>
                        </div>
                        <StudentContentVue :type="1"></StudentContentVue>
                    </div>
                    <div class="discoverMain-student-info-right">
                        <div class="student-info-title">
                            <span>大学</span>
                        </div>
                        <StudentContentVue :type="0"></StudentContentVue>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import StudentContentVue from '@/components/discover/StudentContent.vue'
export default {
    name:'DiscoverMain',
    components:{
        StudentContentVue
    },
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.discoverMain-container{
    /* width: 100%; */
}
.discoverMain-student-container{
    width: 1000px;
    /* background-color: pink; */
    margin: 10px auto;
}
.discoverMain-student-title{
    margin: 20px 0;
    font-size: 25px;
    font-weight: 600;
}
.discoverMain-student-info{
    display: flex;
    width: 1000px;
}
.discoverMain-student-info-left{
    width: 490px;
    margin-right: 20px;
    background-color: white;
    border: 1px solid rgb(221, 221, 221);
    /* box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.5); */
}
.discoverMain-student-info-right{
    width: 490px;
    background-color: white;
    border: 1px solid rgb(221, 221, 221);
    /* box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.5); */
}
.student-info-title{
    font-size: 20px;
    font-weight: 600;
    margin: 20px 10px 20px 15px;
}
</style>