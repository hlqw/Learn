<template>
  <div id="login-container">
    <el-form
      :rules="rules"
      ref="form"
      :model="form"
      label-width="60px"
      class="login-form"
    >
      <h2 class="login-title">小豆子图书信息管理系统</h2>
      <el-form-item label="用户名" prop="username" label-width="10">
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 32,
            message: "长度在 6 到 32 个字符",
            trigger: ["blur", "change"],
          },
        ],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          console.log("成功");
        } else {
          console.log("失败");
          return flase;
        }
      });
    },
  },
};
</script>

<style scoped>
.login-form {
  width: 350px;
  background-color: #fff;
  /* margin:160px auto; */
  padding: 15px;
  border-radius: 20px;
  height: 250px;
  left: 50%;
  top: 50%;
  margin-left: -175px;
  margin-top: -125px;
  position: absolute;
}

.login-title {
  text-align: center;
  color: #606266;
}

#login-container {
  position: absolute;
  width: 100%;
  height: 100%;
  /* background-image: url("../../assets/login-bg.png"); */
}
</style>