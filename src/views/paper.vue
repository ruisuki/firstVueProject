<template>
  <div class="paperpage">

    <!-- 顶部样式 -->
    <van-nav-bar title="翻译"></van-nav-bar>

    <div class="inpCon">
      <!-- 输入框 -->
      <van-field class="textInp" v-model="works" size="large" @keydown.enter.prevent label="" type="textarea"
        placeholder="请输入需要翻译的内容" show-word-limit @keydown.enter="toTanslate" />
      <!-- 输入语言 -->
      <van-field readonly clickable name="picker" :value="inpvalue" label="输入语言" placeholder="点击选择"
        @click="inpPicker = true" />
      <van-popup v-model="inpPicker" position="bottom">
        <van-picker show-toolbar :columns="columns" @confirm="inpConfirm" @cancel="inpPicker = false" />
      </van-popup>

      <!-- 目标语言 -->
      <van-field class="outlan" readonly clickable name="picker" :value="outvalue" label="目标语言" placeholder="点击选择"
        @click="outPicker = true" />
      <van-popup v-model="outPicker" position="bottom">
        <van-picker show-toolbar :columns="columns" @confirm="outConfirm" @cancel="outPicker = false" />
      </van-popup>
    </div>

    <!-- 按钮 -->
    <div class="subBtn">
      <van-button  type="info" @click="toTanslate" :block="true">翻 译</van-button>
    </div>
    <br>
    <div class="showTran" v-if="isShow" v-cloak>
      <div class="Trancontent" >
        <span>{{ result }}</span>
        <span></span>
      </div>


    </div>

  </div>
</template>

<script>
import { URL_KEY } from '@/http/address';
import { getTranslate } from '@/http/api'

export default {
  data() {
    return {
      // 输入框
      isShow: false,

      works: '',

      // 输入语言
      inpvalue: '',
      inpPicker: false,

      // 目标语言
      outvalue: '',
      outPicker: false,

      // 转义
      in: 'auto',
      out: '',

      // 公共部分
      columns: [
        '自动检测',
        '中文',
        '英语',
        '粤语',
        '文言文',
        '日语',
        '韩语',
        '法语',
        '西班牙语',
        '泰语',
        '阿拉伯语',
        '俄语',
        '葡萄牙语',
        '德语',
        '意大利语',
        '希腊语',
        '荷兰语',
        '波兰语',
        '保加利亚语',
        '爱沙尼亚语',
        '丹麦语',
        '芬兰语',
        '捷克语',
        '罗马尼亚语',
        '斯洛文尼亚语',
        '瑞典语',
        '匈牙利语',
        '繁体中文',
        '越南语',
      ],

      getResult: null,

      result: '',
    }
  },

  created() {
    this.inpConfirm('自动检测')
    console.log(this.in);
  },

  methods: {

    inpConfirm(value) {

      this.inpvalue = value;
      this.inpPicker = false;
      this.in = this.inpLan
      console.log(this.inpvalue, '输入语言');

    },

    outConfirm(value) {
      this.outvalue = value;
      this.outPicker = false;
      this.out = this.outLan
      console.log(this.out, '目标语言',);
    },

    async toTanslate() {
      if (this.works === '') {
        this.getResult = '不可为空';
        this.isShow = true
        return
      } else if (this.in == this.out && this.in !== '' || this.in == 'auto' && this.out == 'auto') {
        this.result = '输入语言和目标语言相同';
        this.isShow = true
        return
      }
      try {
        const res = await getTranslate({
          q: this.works,
          from: this.in,
          to: this.out,
          token: URL_KEY
        });

        this.getResult = res.data;

        console.log("结果为", this.getResult);

        this.result = this.getResult.data.dst

        console.log(this.result);
        this.isShow = true

      }
      catch (err) {
        console.log('返回结果失败', err);
      }
    },

  },


  computed: {
    inpLan() {
      if (this.inpvalue == '自动检测') {
        this.in = 'auto';
        return 'auto';
      } else if (this.inpvalue == '中文') {
        this.in = 'zh'
        return 'zh';
      } else if (this.inpvalue == '英文') {
        this.in = 'en';
        return 'en';
      } else if (this.inpvalue == '粤语') {
        this.in = 'yue';
        return 'yue';
      } else if (this.inpvalue == '文言文') {
        this.in = 'wyw';
        return 'wyw';
      } else if (this.inpvalue == '日语') {
        this.in = 'jp';
        return 'jp';
      } else if (this.inpvalue == '韩语') {
        this.in = 'kor';
        return 'kor';
      } else if (this.inpvalue == '法语') {
        this.in = 'fra';
        return 'fra';
      } else if (this.inpvalue == '西班牙语') {
        this.in = 'spa';
        return 'spa';
      } else if (this.inpvalue == '泰语') {
        this.in = 'th';
        return 'th';
      } else if (this.inpvalue == '阿拉伯语') {
        this.in = 'ara';
        return 'ara';
      } else if (this.inpvalue == '俄语') {
        this.in = 'ru';
        return 'ru';
      } else if (this.inpvalue == '葡萄牙语') {
        this.in = 'pt';
        return 'pt';
      } else if (this.inpvalue == '德语') {
        this.in = 'de';
        return 'de';
      } else if (this.inpvalue == '意大利语') {
        this.in = 'it';
        return 'it';
      } else if (this.inpvalue == '希腊语') {
        this.in = 'el';
        return 'el';
      } else if (this.inpvalue == '荷兰语') {
        this.in = 'nl';
        return 'nl';
      } else if (this.inpvalue == '波兰语') {
        this.in = 'pl';
        return 'pl';
      } else if (this.inpvalue == '保加利亚语') {
        this.in = 'bul';
        return 'bul';
      } else if (this.inpvalue == '爱沙尼亚语') {
        this.in = 'est';
        return 'est';
      } else if (this.inpvalue == '丹麦语') {
        this.in = 'dan';
        return 'dan';
      } else if (this.inpvalue == '芬兰语') {
        this.in = 'fin';
        return 'fin';
      } else if (this.inpvalue == '捷克语') {
        this.in = 'cs';
        return 'cs';
      } else if (this.inpvalue == '罗马尼亚语') {
        this.in = 'rom';
        return 'rom';
      } else if (this.inpvalue == '斯洛文尼亚语') {
        this.in = 'slo';
        return 'slo';
      } else if (this.inpvalue == '瑞典语') {
        this.in = 'swe';
        return 'swe';
      } else if (this.inpvalue == '匈牙利语') {
        this.in = 'hu';
        return 'hu';
      } else if (this.inpvalue == '繁体中文') {
        this.in = 'cht';
        return 'cht';
      } else if (this.inpvalue == '越南语') {
        this.in = 'vie';
        return 'vie';
      } else {
        return ''; // 处理其他情况，如果没有匹配的语言
      }
    },
    outLan() {
      if (this.outvalue == '自动检测') {
        this.out = 'auto';
        return 'auto';
      } else if (this.outvalue == '中文') {
        this.out = 'zh'
        return 'zh';
      } else if (this.outvalue == '英语') {
        this.out = 'en';
        return 'en';
      } else if (this.outvalue == '粤语') {
        this.out = 'yue';
        return 'yue';
      } else if (this.outvalue == '文言文') {
        this.out = 'wyw';
        return 'wyw';
      } else if (this.outvalue == '日语') {
        this.out = 'jp';
        return 'jp';
      } else if (this.outvalue == '韩语') {
        this.out = 'kor';
        return 'kor';
      } else if (this.outvalue == '法语') {
        this.out = 'fra';
        return 'fra';
      } else if (this.outvalue == '西班牙语') {
        this.out = 'spa';
        return 'spa';
      } else if (this.outvalue == '泰语') {
        this.out = 'th';
        return 'th';
      } else if (this.outvalue == '阿拉伯语') {
        this.out = 'ara';
        return 'ara';
      } else if (this.outvalue == '俄语') {
        this.out = 'ru';
        return 'ru';
      } else if (this.outvalue == '葡萄牙语') {
        this.out = 'pt';
        return 'pt';
      } else if (this.outvalue == '德语') {
        this.out = 'de';
        return 'de';
      } else if (this.outvalue == '意大利语') {
        this.out = 'it';
        return 'it';
      } else if (this.outvalue == '希腊语') {
        this.out = 'el';
        return 'el';
      } else if (this.outvalue == '荷兰语') {
        this.out = 'nl';
        return 'nl';
      } else if (this.outvalue == '波兰语') {
        this.out = 'pl';
        return 'pl';
      } else if (this.outvalue == '保加利亚语') {
        this.out = 'bul';
        return 'bul';
      } else if (this.outvalue == '爱沙尼亚语') {
        this.out = 'est';
        return 'est';
      } else if (this.outvalue == '丹麦语') {
        this.out = 'dan';
        return 'dan';
      } else if (this.outvalue == '芬兰语') {
        this.out = 'fin';
        return 'fin';
      } else if (this.outvalue == '捷克语') {
        this.out = 'cs';
        return 'cs';
      } else if (this.outvalue == '罗马尼亚语') {
        this.out = 'rom';
        return 'rom';
      } else if (this.outvalue == '斯洛文尼亚语') {
        this.out = 'slo';
        return 'slo';
      } else if (this.outvalue == '瑞典语') {
        this.out = 'swe';
        return 'swe';
      } else if (this.outvalue == '匈牙利语') {
        this.out = 'hu';
        return 'hu';
      } else if (this.outvalue == '繁体中文') {
        this.out = 'cht';
        return 'cht';
      } else if (this.outvalue == '越南语') {
        this.out = 'vie';
        return 'vie';
      }
    }
  }

}
</script>


<style scoped>
.inpCon {
  margin-top: .3125rem;
  margin-bottom: 0.5rem;
  padding: 0 .3125rem ;
}

.inpCon .textInp {
  border-radius: 0.3125rem 0.3125rem 0 0;
}

.inpCon .outlan{
  border-radius: 0 0 .3125rem .3125rem;
}

.paperpage {
  background-color: #e9e9e9;
  height: 41.6875rem;
}

.subBtn{
  padding:0 0.3125rem;
}

.showTran {
  height: 21.625rem;
  width: 22.1875rem;
  margin-left: .3125rem;
}

.showTran p {
  height: 1.875rem;
  line-height: 1.875rem;
  padding-left: 1.25rem;
}

.showTran .Trancontent {
  height: 87%;
  width: 100%;
  padding: 0.3125rem;
  border-radius: .3125rem;
  overflow: auto;
  background-color: #fff;

}

.showTran .Trancontent span {
  display: inline-block;
  max-width: 100%;
  word-break: break-word;
  overflow-wrap: break-word;
}
</style>