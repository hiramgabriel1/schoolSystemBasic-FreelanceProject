<script>
  import "../../app.css";


  const handleCreate = async () => {
    // cuando se registre regresar al index
  }
</script>

<!-- component -->
<!-- Create by joker banny -->
<div class="h-screen bg-indigo-100 flex justify-center items-center">
  <div class="lg:w-2/5 md:w-1/2 w-2/3">
    <form class="bg-white p-10 rounded-lg shadow-lg min-w-full">
      <h1 class="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">
        Registrar estudiante
      </h1>
      <div>
        <label
          class="text-gray-800 font-semibold block my-3 text-md"
          for="username">Nombre completo</label
        >
        <input
          class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
          type="text"
          name="username"
          id="username"
          placeholder="Nombre completo"
        />
      </div>
      <div>
        <label
          class="text-gray-800 font-semibold block my-3 text-md"
          for="email">Curso</label
        >
        <input
          class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
          type="text"
          name="email"
          id="email"
          placeholder="Sistemas"
        />
      </div>
      <div>
        <label
          class="text-gray-800 font-semibold block my-3 text-md"
          for="password">Matrícula</label
        >
        <input
          class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
          type="text"
          name="password"
          id="password"
          placeholder="3783678362"
        />
      </div>
      <div>
        <label
          class="text-gray-800 font-semibold block my-3 text-md"
          for="confirm">Número de télefono</label
        >
        <input
          class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
          type="text"
          name="confirm"
          id="confirm"
        />
      </div>
      <div>
        <label
          class="text-gray-800 font-semibold block my-3 text-md"
          for="confirm">Número de documento</label
        >
        <input
          class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
          type="text"
          name="confirm"
          id="confirm"
          placeholder="9023208989"
        />
      </div><br>
      <button
        type="submit"
        class="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
        on:click={handleCreate}
        >Crear</button
      >
    </form>
  </div>
</div>
