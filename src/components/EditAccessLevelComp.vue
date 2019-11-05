<template>
  <v-app class="pa-5" style="width:100%;">
    <v-content class="card pa-5">
      <v-flex class="fill-height">
        <v-layout row class="pb-2">
          <v-layout align-start justify-start>
            <h1 class="header white--text">Edit Access Level</h1>
          </v-layout>
        </v-layout>
        <v-layout row>
          <v-text-field
            v-model="ALname"
            disabled
            single-line
            dark
            label="Access Level Name"
            required
          ></v-text-field>
        </v-layout>
        <v-layout row>
          <v-text-field v-model="ALDes" disabled single-line dark label="Description" required></v-text-field>
        </v-layout>
        <!-- <v-layout>
         
          <v-switch
          dark
      v-model="SelectER"
      label="Select Existing Roles"
    ></v-switch>
        </v-layout>
        <v-layout row>
          {{selectedRole}}
          <v-select dark :items="userLevels" v-model="selectedRole" v-show="SelectER" label="Select" outlined></v-select>
        </v-layout>-->
        <!-- <v-layout row> -->
        <!-- {{userPermissonSelected}} -->
        <table border="0" width="80%" class="white--text">
          <thead>
            <tr>
              <th>
                <v-checkbox v-model="SelectedAll" label="Select All" color="orange" dark></v-checkbox>
                <!-- <v-btn flat class="white--text">
                  <h2>Select all</h2>
                </v-btn>-->
                <!-- <h2>Select all</h2> -->
              </th>
              <th v-for="header in headers" :key="header.id">
                <h2>{{header.text}}</h2>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="dessert in desserts" :key="dessert.id">
              <td align="center">
                <div class="pa-2" v-for="functions in dessert.function" :key="functions.id">
                  <label class="container">
                    <input
                      type="checkbox"
                      color="orange"
                      v-model="userPermissonSelected"
                      :value="[dessert.moduleName, functions.functionCode]"
                    />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </td>
              <td align="center ">
                <div
                  class="pa-2"
                  v-for="functions in dessert.function"
                  :key="functions.id"
                >{{dessert.moduleName+'.'+functions.functionCode}}</div>
              </td>
              <td align="center">
                <div
                  class="pa-2"
                  v-for="functions in dessert.function"
                  :key="functions.id"
                >{{dessert.moduleName}}</div>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <!-- <template v-slot:header.function="{ header }">
        {{header.text}}-->
        <!-- <tr>
        
        <th
          v-for="header in props.headers"
          :key="header.text"
          :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
          @click="changeSort(header.value)"
        >
          <v-icon small>arrow_upward</v-icon>
          {{ header.text }}
        </th>
        </tr>-->
        <!-- </template> -->
        <!-- <template v-slot:headers="props">
      <tr>
        
        <th
          v-for="header in props.headers"
          :key="header.text"
          :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
          @click="changeSort(header.value)"
        >
          <v-icon small>arrow_upward</v-icon>
          {{ header.text }}
        </th>
      </tr>
    </template>
    <template v-slot:items="props">
      <tr :active="props.selected" @click="props.selected = !props.selected">
        <td  >
          <v-flex class="text-xs-center" v-for="permission in props.item.function" :key="permission.id">
            <v-checkbox
            v-model="userPermissonSelected"
            :input-value="props.selected"
            :value="[props.item.moduleName,permission.functionCode]"
            :label="props.item.moduleName +'.'+permission.functionCode"
            color="orange"
            hide-details
          ></v-checkbox>
            
            
          </v-flex>
          </td>
        <td class="text-xs-center" >
        <v-flex class="text-xs-center" v-for="permission in props.item.function" :key="permission.id">
            {{ props.item.moduleName }}
          </v-flex>
          </td>
      </tr>
        </template>-->
        <!-- </v-data-table> -->
        <!-- </v-layout> -->
        <v-layout row class="pa-3">
          <v-layout align-end justify-end>
            <v-btn large class="orange white--text" outline @click="backClick">Back</v-btn>
            <v-btn
              large
              class="orange white--text"
              @click="CAccessLevel"
              :loading="Cloading"
            >Update Access Level</v-btn>
          </v-layout>
        </v-layout>
      </v-flex>
    </v-content>
  </v-app>
</template>
<script>
import { async } from "q";
export default {
  data() {
    return {
      selectedRole: "",
      SelectER: false,
      SelectedAll: false,
      Cloading: false,
      UserRoles: [],
      userLevels: [],
      editLevels: [],
      edata: [],
      userPermissonSelected: [],
      ALname: "",
      ALDes: "",
      items: ["Admin", "Efl Admin", "User"],
      headers: [
        {
          text: "Permisson",
          align: "left",
          sortable: false,
          value: "function"
        },
        { text: "Module", value: "moduleName" }
        // { text: "Description", value: "description" },
      ],
      desserts: [
        // {
        //   name: "Booking.Create",
        //   module: "Booking",
        //   description: "Bonbon souffle powder pudding powder apple pie lemon",
        // },
      ]
    };
  },
  watch: {
    SelectedAll: function(e) {
      // console.log(e);
      if (e) {
        const selected = [];

        this.desserts.filter(select => {
          // console.log(select)
          select.function.filter(dr => {
            // console.log(dr.functionCode)
            selected.push([select.moduleName, dr.functionCode]);
          });
        });
        // console.log(selected)
        this.userPermissonSelected = selected;
      } else {
        this.userPermissonSelected.length = 0;
      }
    },
    userPermissonSelected: function(val) {
      // console.log(val);
      const data = [];
      val.filter(function(element) {
        data.push({
          module_code: element[0]
            .toUpperCase()
            .split(" ")
            .join("_"),
          functions: [element[1]]
        });
      });

      // console.log(data)
      this.edata = data;
    },
  },
  created() {
    const vm = this;
    const token = localStorage.getItem("token");
    const id = this.$route.params.id;

    //
    axios
      .get(
        `${process.env.VUE_APP_API_URL_LOGIN}admin/modules-and-permissions`,
        {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + token
          }
        }
      )
      .then(function(response) {
        // console.log(response.data.data.module);
        const data = response.data.data.module;

        data.filter(datz => {
          vm.desserts.push(datz);
        });
      })
      .catch(function(error) {
        console.log(error);
      });
    axios
      .get(`${process.env.VUE_APP_API_URL_LOGIN}admin/role/permissions/${id}`, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token
        }
      })
      .then(response => {
        // this.editLevels = JSON.parse(JSON.stringify(response.data.module_data))
        const data = Object.values(response.data.module_data);
        const selected = [];
        // data.push()
        // console.log(data);
        // const der = response.data.module_data
        data.filter(dr => {
          dr.permissions.filter(sort => {
            selected.push([dr.moduleName, sort.functionCode]);
          });
        });

        if (this.userPermissonSelected.length > 0) {
        this.userPermissonSelected.length = 0
      }else{
        this.userPermissonSelected = selected;
      }
      })
      .catch(function(error) {
        console.log(error);
      });

    axios
      .get(`${process.env.VUE_APP_API_URL_LOGIN}admin/role`, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token
        }
      })
      .then(response => {
        // console.log(id);
        const data = Object.values(response.data.data);

        // this.UserRoles = data

        const userRoleData = data.filter(dat => dat.id == id)

        // console.log(userRoleData[0])
        this.ALname = userRoleData[0].roleName
        this.ALDes = userRoleData[0].roleDescription
      })
      .catch(function(error) {
        console.log(error);
        // if(error){
        //   localStorage.removeItem('token')
        //   vm.$router.push('/login')
        // }
      });
  },
  computed: {
    
  },
  methods: {
    SelectAll: function(e) {
      const selected = [];

      e.filter(select => {
        // console.log(select)
        select.function.filter(dr => {
          // console.log(dr.functionCode)
          selected.push([select.moduleName, dr.functionCode]);
        });
      }).catch(function(error) {
        console.log(error);
      });
      // console.log(selected)
      if (this.userPermissonSelected.length > 0) {
        this.userPermissonSelected.length = 0
      }else{
        this.userPermissonSelected = selected;
      }
      
      // this.SelectAll = !this.SelectAll

      // console.log(this.SelectAll);
    },
    CAccessLevel: async function() {
      this.Cloading = true;

      const vm = this;
            const plist = vm.userPermissonSelected.filter(function(da) {
              return da;
            });

            console.log(plist)
            const data = [
              {
                role_code: vm.ALname.toUpperCase()
                  .split(" ")
                  .join("_"),
                permissions: JSON.parse(JSON.stringify(plist))
              }
            ];

            // console.log(data[0])
            // await axios
            //   .post(
            //     `${process.env.VUE_APP_API_URL_LOGIN}admin/map-permissions`,
            //     data[0],
            //     {
            //       headers: {
            //         Accept: "application/json",
            //         Authorization: "Bearer " + token
            //       }
            //     }
            //   )
            //   .then(response => {
            //     // console.log(response);
            //     vm.Cloading = false;
            //     vm.$router.push({ name: "accesslevel" })
            //   })
            //   .catch(function(error) {
            //     console.log(error);
            //   });
          // } else {
          // }
        // })
        // .catch(function(error) {
        //   console.log(error);
        // });
    },
    backClick: function() {
      this.$router.push({ name: "accesslevel" });
    }
  }
};
</script>
<style scoped>
.container {
  /* display: block; */
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  /* font-size: 22px; */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 3;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: orange;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 7px;
  top: 4px;
  width: 5px;
  height: 11px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>