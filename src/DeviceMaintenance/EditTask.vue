<template>
  <div class="Container-EditTask">
    <!-- 面包屑 -->
    <el-breadcrumb class="breadcrumb" separator="/">
      <el-breadcrumb-item class="pathActive">设备保养</el-breadcrumb-item>
      <el-breadcrumb-item class="active">修改任务分配</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="Task-container">
      <div class="Task-box">
        <el-form ref="form" :model="TaskInfo" label-position="left">
          <div class="part">
            <div class="part_left">
              <div class="part_left_0">
                <el-form-item label="设备" class="task name">
                  <span> {{ TaskInfo.deviceinfo }}</span>
                </el-form-item>
              </div>
              <div class="part_left_0">
                <el-form-item label="下次保养时间" class="task name">
                  <span> {{ TaskInfo.nextDate }}</span>
                </el-form-item>
              </div>
            </div>
            <div class="part_right">
              <el-form-item
                label="标准（如果需要修改标准，请先解绑）"
                class="task name"
              >
                <span> {{ TaskInfo.task }}</span>
              </el-form-item>
              <el-form-item label="人员选择" class="task">
                <el-select
                  clearable
                  filterable
                  multiple
                  placeholder="请选择保养人员"
                  v-model="TaskInfo.ops"
                >
                  <el-option
                    v-for="item in OpUsers"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </div>
          </div>
          <div class="Btns">
            <div class="sub-btn">
              <el-button @click="submittask">保存并提交</el-button>
            </div>
            <div class="cancel-btn">
              <el-button @click="cancel">返回</el-button>
            </div>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  created: function () {
    let that = this;
    console.log(this.$route.query);
    that.TaskInfo.deviceinfo =
      this.$route.query.devicename + "（" + this.$route.query.deviceNo + "）";
    that.TaskInfo.task = this.$route.query.taskid * 1;
    that.TaskInfo.nextDate = this.$route.query.nextDate;
    let URL = "ops/schedule/status/" + this.$route.query.taskid;
    that
      .request(URL, {}, "GET")
      .then((res) => {
        console.log(res.data);
        that.TaskInfo.nextDate = res.data.nextDate;
      })
      .catch((res) => {
        this.$message({
          message: res.response.data.message,
          type: "error",
        });
      });
    setTimeout(() => {
      // 获取全部 OPERATOR 员工
      that
        .request("user/query?role==OPERATOR", {}, "GET")
        .then((res) => {
          for (var i = 0; i < res.data.content.length; i++) {
            console.log(res.data.content[i]);
            let obj = {};
            obj.value = res.data.content[i].id;
            obj.label =
              res.data.content[i].username +
              "(姓名：" +
              res.data.content[i].name +
              ")";
            that.OpUsers.push(obj);
          }
        })
        .catch((res) => {
          this.$message({
            message: res.response.data.message,
            type: "error",
          });
        });
      // 获取全部标准
      // that
      //   .request("ops/schedule?page=0&size=1000000000", {}, "GET")
      //   .then((res) => {
      //     console.log(res.data);
      //     for (var i = 0; i < res.data.content.length; i++) {
      //       let obj = {};
      //       obj.value = res.data.content[i].id;
      //       obj.label =
      //         res.data.content[i].name + "(" + res.data.content[i].no + ")";
      //       that.TaskOptions.push(obj);
      //     }
      //   })
      //   .catch((res) => {
      //     this.$message({
      //       message: res.response.data.message,
      //       type: "error",
      //     });
      //   });
    }, 300);
    let url = "ops/schedule/detail/" + this.$route.query.taskid;
    that
      .request(url, {}, "GET")
      .then((res) => {
        console.log(res.data);
        that.TaskInfo.task = res.data.name + "(" + res.data.no + ")";
        for (let i = 0; i < res.data.ops.length; i++) {
          that.TaskInfo.ops.push(res.data.ops[i].id);
        }
      })
      .catch((res) => {
        this.$message({
          message: res.response.data.message,
          type: "error",
        });
      });
  },
  data() {
    return {
      TaskInfo: {
        deviceinfo: "",
        nextDate: "",
        ops: [],
        task: "",
      },
      collapseinfo: [],
      OpUsers: [], // 保养人员
      TaskOptions: [],
    };
  },
  methods: {
    // 保存编辑并提交
    submittask() {
      let that = this;
      console.log(that.TaskInfo);
      // let obj = {};
      if (that.$route.query.deviceID == "") {
        that.$message({
          message: "未分配设备，请先分配设备！",
          type: "error",
        });
      } else {
        if (
          that.TaskInfo.nextDate == "" ||
          that.TaskInfo.task.length == 0 ||
          that.TaskInfo.ops.length == 0
        ) {
          that.$message({
            message: "请将信息填写完整",
            type: "warning",
          });
        } else {
          let ops = [];
          let task = [];
          for (let i = 0; i < that.TaskInfo.ops.length; i++) {
            ops.push({ id: that.TaskInfo.ops[i] });
          }
          task.push({
            id: that.TaskInfo.task,
          });
          let url = "ops/schedule/detail/" + this.$route.query.taskid;
          that
            .request(url, {}, "GET")
            .then((res) => {
              console.log(res.data);
              console.log(ops);
              let obj = {};
              obj.content = res.data.content;
              obj.id = res.data.id;
              obj.name = res.data.name;
              obj.remark = res.data.remark;
              obj.no = res.data.no;
              obj.startDate = res.data.startDate;
              obj.scheduleType = res.data.scheduleType;
              obj.tools = res.data.tools;
              obj.device = [{ id: that.$route.query.deviceID }];
              obj.ops = ops;
              console.log(obj);
              setTimeout(function () {
                that
                  .request(url, obj, "PUT")
                  .then((res) => {
                    console.log(res);
                    that.$message({
                      message: "修改成功",
                      type: "success",
                    });
                  })
                  .catch(() => {
                    that.$message({
                      message: "请先解绑！",
                      type: "error",
                    });
                  });
              }, 500);
            })
            .catch((res) => {
              that.$message({
                message: res.response.data.message,
                type: "error",
              });
            });
        }
      }
    },
    // 取消编辑
    cancel() {
      this.$router.push({
        path: "/totalTaskList",
      });
    },
  },
};
</script>

<style lang="scss">
.Container-EditTask {
  // border: 1px solid red;
  width: 100%;
  .breadcrumb {
    width: 100%;
    height: 30px;
    line-height: 30px;
    overflow: hidden;
    font-size: 16px;
    // border: 1px solid red;
    padding: 10px 0;
    .el-breadcrumb__inner {
      font-weight: bold;
      margin-left: 10px;
    }
    .el-breadcrumb__inner.is-link {
      color: #666666;
      font-weight: normal;
    }

    .active {
      font-size: 20px;
    }
  }
  .Task-container {
    width: 100%;
    // border: 1px solid red;
    display: flex;
    justify-content: center;
    .Task-box {
      width: 98%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      // border: 1px solid red;
      .el-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        background: #fff;
        border-radius: 5px;
        box-shadow: 5px 5px 20px #eeeeee, -5px 5px 20px #eeeeee;
        padding: 15px 0;
        .part {
          display: flex;
          justify-content: space-evenly;
          align-items: flex-start;
          width: 100%;
          .part_left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 48%;
            font-weight: 500;
            // border: 1px solid #409eff;
            .part_left_0 {
              width: 95%;
              // border: 1px solid red;
              display: flex;
              justify-content: space-between;
              align-items: center;
              .task {
                width: 48%;
                font-weight: bold;
              }
              .name {
                display: flex;
                flex-direction: column;
                span {
                  font-size: 20px;
                  font-weight: normal;
                }
              }
            }
          }
          .part_right {
            // border: 1px solid red;
            width: 48%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            font-weight: 500;
            .task {
              font-weight: bold;
            }
            .name {
              display: flex;
              flex-direction: column;
              span {
                font-size: 20px;
                font-weight: normal;
              }
            }
          }
        }
        // 下面俩按钮
        .Btns {
          display: flex;
          margin-top: 20px;
          justify-content: space-between;
          // border: 1px solid red;
          width: 180px;
          .sub-btn {
            .el-button {
              // width: 80px;
              background: linear-gradient(-270deg, #6eb5fc, #409eff);
              color: #fff;
              border: 0;
              padding: 10px;
              font-size: 15px;
              border-radius: 5px;
              &:hover {
                opacity: 0.9;
              }
            }
          }
          .cancel-btn {
            .el-button {
              width: 70px;
              background: linear-gradient(-270deg, #fc9494, #f96b6c);
              color: #fff;
              border: 0;
              padding: 10px;
              font-size: 15px;
              border-radius: 5px;
              &:hover {
                opacity: 0.9;
              }
            }
          }
        }
      }
    }
  }
  .el-dialog {
    width: 400px;
  }
}
</style>
