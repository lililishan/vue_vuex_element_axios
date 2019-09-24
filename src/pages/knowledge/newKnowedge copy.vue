<template>
    <div class="addWrap leave-addWrap">
      <!--申请头部-->
      <div class="add-header">
        <div class="date-icon">
          <i class="icon iconfont icontubiao"></i>
        </div>
        <div class="header-dskr"><input type="" v-model="title" name=""></div>
        <div class="commit-butt" v-show="buttShow">
          <button>提交</button>
          <button>草稿</button>
        </div>
        <div class="title">
          <div class="act">正文内容</div>
          <div>文档附件</div>
        </div>
        <!-- <el-tabs v-model="activeName">

          <el-tab-pane label="正文内容" name="正文内容">
            

          </el-tab-pane>

          <el-tab-pane label="文档附件" name="文档附件">
           <div class="leave-process">
             <div class="process-center">
             </div>
           </div>
          </el-tab-pane>
        </el-tabs> -->
      </div>



      <!--头部结束-->
     <!--内容区-->
     <div class="apply-cont">
        <!-- 富文本编辑组件 -->
        <editor id='tinymce' v-model='tinymceHtml' :init='init'></editor>
        <!-- <div v-html='tinymceHtml'></div> -->
    </div>



    </div>

</template>

<script>
 import tinymce from 'tinymce/tinymce'
 import 'tinymce/themes/silver/theme'
 import Editor from '@tinymce/tinymce-vue'
 import 'tinymce/plugins/image'
 import 'tinymce/plugins/link'
 import 'tinymce/plugins/code'
 import 'tinymce/plugins/table'
 import 'tinymce/plugins/lists'
 import 'tinymce/plugins/contextmenu'
 import 'tinymce/plugins/wordcount'
 import 'tinymce/plugins/colorpicker'
 import 'tinymce/plugins/textcolor'

const tinymceCDN = 'https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js'

  export default {
  name: 'tinymce',
    
    data() {
      return {
         activeName: '正文内容',
         title:'',
         buttShow:true,
         tinymceHtml: '请输入内容',
         init: {
          language_url: '/static/tinymce/zh_CN.js',
          language: 'zh_CN',
          skin_url: '/static/tinymce/skins/ui/oxide',
          height: 500,
          plugins: 'link lists image code table colorpicker textcolor wordcount contextmenu',
          toolbar:
            'bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat | imageUpload',
          // setup: (editor) => {
          //     editor.ui.registry.addButton('imageUpload', {
          //        text: '上传图片',           
          //         tooltip: '插入图片',
          //         icon: 'image',
          //         onAction: (meta) => {
          //           console.log('meta', meta);
          //           console.log(111)
          //     }
          //   })
          // },
          setup(editor) {
            editor.on('FullscreenStateChanged', (e) => {
              _this.fullscreen = e.state
            })
          },
          file_picker_callback: function(callback, value, meta) {
            console.log('meta', meta);
            
            // Provide image and alt text for the image dialog
            if (meta.filetype == 'image') {
              // 触发input的click事件，并取得file对象
              // 进行ajax上传图片
              // 在上传成功的回调函数中，调用callback(uploadedImageUrl);
            }
          },
          branding: false
        }
      }
    },
    methods: {
      imageSuccessCBK(arr) {
        const _this = this
        arr.forEach(v => {
          window.tinymce.get(_this.tinymceId).insertContent(`<img class="wscnph" src="${v.url}" >`)
        })
      },
      
      
    },
    mounted () {
      tinymce.init({})
        
        
     },
    components: {Editor}
  }
</script>

<style lang="less">
  .editor-upload-btn {
    display: inline-block;
  }
 .title{
    width: 100%;
    margin-top: 12px;
    height: 28px;
    line-height: 28px;
    div{
      float: left;
      margin-right: 40px;
      font-size: 14px;
      color: #666666;
    }
    div.act{
      color: #ce4b4b;
      border-bottom:3px solid #ce4b4b;
    }
 }
</style>
