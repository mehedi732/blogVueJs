<template>
    <div>
        <section class="content">
      <!-- Default box -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">User List</h3>

          <div class="card-tools">
            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#addNew">
              Add New <i class="fa fa-plus-circle"></i></button>

          </div>
        </div>
       <div class="card-body">
              <table id="example1" class="table table-bordered table-striped">
                <thead>
                <tr>
                  <th>SN</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Type</th>
                  <th>Registered at</th>
                  <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr  v-for="(user,index) in users" :key="user.id">
                  <td>{{index + 1}}</td>
                  <td>{{user.name}}</td>
                  <td>{{user.email}}</td>
                  <td>{{user.type | upText}}</td>
                  <td>{{user.created_at | myDate}}</td>
                  <td>
                      <i class="fa fa-edit green"></i>
                      <i class="fa fa-trash red"></i>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <!-- /.card-body -->
      </div>
      <!-- /.card -->
    </section>
    <!-- Modal -->
    <div class="modal fade" id="addNew" tabindex="-1" role="dialog" aria-labelledby="addNewTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Add New</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
                <form @submit.prevent="addUser">
                    <div class="modal-body">
                        <div class="form-group">
                            <label>Name</label>
                            <input v-model="form.name" type="text" name="name"
                                class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
                            <has-error :form="form" field="name"></has-error>
                        </div>

                        <div class="form-group" :class="{ 'has-error': form.errors.has('email') }">
                            <label>Email</label>
                            <input v-model="form.email" type="email" name="email"
                                class="form-control" :class="{ 'is-invalid': form.errors.has('email') }">
                            <has-error :form="form" field="email"></has-error>

                        </div>
                        <div class="form-group" :class="{ 'has-error': form.errors.has('type') }">
                            <label>User Role</label>
                            <select class="form-control" v-model="form.type" name="type" :class="{ 'is-invalid': form.errors.has('type') }">
                            <option value="">Select user role</option>
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                            <option value="author">Author</option>
                            </select>
                            <has-error :form="form" field="type"></has-error>
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input v-model="form.password" type="password" name="password"
                            class="form-control" :class="{ 'is-invalid': form.errors.has('password') }">
                            <has-error :form="form" field="password"></has-error>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-success">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>
<script>
    export default {
        data () {
            return {
                users:{},
                form: new Form({
                    name: '',
                    email: '',
                    type: '',
                    password: '',
                    remember: false
                })
            }
        },
        methods : {
            loadUsers(){
               axios.get('api/user').then(({ data }) => (this.users = data.data))
            },
            addUser(){
                this.$Progress.start()
                this.form.post('api/user')
                this.$Progress.finish()
            }
        },
        created() {
           this.loadUsers();
        }
    }
</script>
