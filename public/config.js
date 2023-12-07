/**
 * 只需要对 userData 及type内容进行增删或者修改
 * userData
 *  只需要修改Name跟CompleteID字段
 *  CompleteID 需要不与其他数据重复
 *  Name 为抽奖用户名
 * type
 *  value为数字且不能与其他数据重复
 *  label为当前奖项名字
 *  number为当前奖项抽取人数
 */

window.configData = {
  data: {
    // 用户
    userData: [
      { Company: '', CompleteID: '4', Name: '姜林', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '5', Name: '李杰', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '6', Name: '陈茜', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '7', Name: '宋甜甜', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '8', Name: '孙凤民', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '9', Name: '江竹平', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '10', Name: '张晟斌', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '11', Name: '孔安', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '12', Name: '姜元会', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '13', Name: '刘大为', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '14', Name: '李文文', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '15', Name: '常金铭', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '16', Name: '张晶晶', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '17', Name: '安翠玲', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '18', Name: '张正毅', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '19', Name: '孙致化', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '20', Name: '王鑫', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '21', Name: '曲鹏', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '22', Name: '王林鑫', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '23', Name: '张鹏', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '24', Name: '宋恩斌', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '25', Name: '秦榛', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '26', Name: '谢鑫', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '27', Name: '安志涛', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '28', Name: '黄世杰', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '29', Name: '张晶雯', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '30', Name: '刘慧玲', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '31', Name: '曹望党', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '32', Name: '陈常亮', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '33', Name: '赵云嘉', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '34', Name: '韩超', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '35', Name: '位昊', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '36', Name: '莫新迎', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '37', Name: '迟名良', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '38', Name: '巨振德', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '39', Name: '赵莹', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '40', Name: '王明娟', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '41', Name: '李风波', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '42', Name: '刘菲菲', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '43', Name: '张鹿', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '44', Name: '宗玉萍', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '45', Name: '鲁绪枝', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '46', Name: '栾胜洁', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '47', Name: '李清世', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '48', Name: '程庆兰', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '49', Name: '张其宣', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '50', Name: '陈纪增', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '51', Name: '李景林', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '52', Name: '李备战', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '53', Name: '时雪林', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '54', Name: '赵镇伟', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '55', Name: '胡金壮', OpenID: '1', Award: '0' },
      { Company: '', CompleteID: '56', Name: '唐秀君', OpenID: '1', Award: '0' }
    ],
    // 奖项
    type: [
      { value: '9', label: '特等奖', number: '2' },
      { value: '1', label: '一等奖', number: '2' },
      { value: '2', label: '二等奖', number: '5' },
      { value: '3', label: '三等奖', number: '10' }
    ]
  }
}
