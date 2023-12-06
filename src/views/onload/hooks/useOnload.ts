import { computed, reactive, ref } from 'vue'
import { useOnloadStore } from '@/store/modules/onload'
import { storeToRefs } from 'pinia'

export const useOnload = function () {
  const onloadStore = useOnloadStore()
  const { data } = storeToRefs(onloadStore)

  const userNum = ref(0) // 用户数据长度
  const step = reactive({
    title: '',
    status: 'wait',
    description: '校验数据是否一致'
  }) // 最后一步提示语

  const stop = reactive({
    show: false,
    tips: '叁'
  }) // 倒计时文字--叁贰壹

  const classStop = computed(() => {
    return {
      'lottery-stop': true,
      show: stop.show
    }
  }) // 利用计算属性绑定class

  return {
    data,
    step,
    stop,
    userNum,
    classStop
  }
}
