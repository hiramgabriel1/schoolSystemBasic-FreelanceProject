<script>
  import "../../app.css";
  let firstName = "";
  let lastName = "";
  let Course = "";
  let NumberMat = "";
  let NumberPhone = "";
  let NumberDoc = "";

  async function handleSubmit() {
    const url = "https://school-api-lrj2.onrender.com/api/students/new"; // URL de la API
    const data = {
      firstName,
      lastName,
      Course,
      NumberMat,
      NumberPhone,
      NumberDoc,
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const message = `An error has occurred: ${res.status}`;
      console.error(message);
      // Agrega aquí la lógica para manejar el error de acuerdo a tus necesidades
    } else {
      const result = await res.json();
      console.log(result); // Puedes manejar la respuesta de la API de acuerdo a tus necesidades
    }
  }
</script>

<div class="h-screen bg-indigo-100 flex justify-center items-center">
  <div class="lg:w-2/5 md:w-1/2 w-2/3">
    <form
      class="bg-white p-10 rounded-lg shadow-lg min-w-full"
      on:submit|preventDefault={handleSubmit}
    >
      <h1 class="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">
        Registrar estudiante
      </h1>
      <div>
        <label
          class="text-gray-800 font-semibold block my-3 text-md"
          for="firstName">Nombre completo</label
        >
        <input
          class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
          type="text"
          name="firstName"
          id="firstName"
          bind:value={firstName}
          placeholder="Nombre completo"
        />
      </div>
      <div>
        <label
          class="text-gray-800 font-semibold block my-3 text-md"
          for="lastName">Curso</label
        >
        <input
          class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
          type="text"
          name="lastName"
          id="lastName"
          bind:value={Course}
          placeholder="Sistemas"
        />
      </div>
      <div>
        <label
          class="text-gray-800 font-semibold block my-3 text-md"
          for="Course">Matrícula</label
        >
        <input
          class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
          type="text"
          name="Course"
          id="Course"
          bind:value={NumberMat}
          placeholder="3783678362"
        />
      </div>
      <div>
        <label
          class="text-gray-800 font-semibold block my-3 text-md"
          for="NumberPhone">Número de télefono</label
        >
        <input
          class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
          type="text"
          name="NumberPhone"
          id="NumberPhone"
          bind:value={NumberPhone}
        />
      </div>
      <div>
        <label
          class="text-gray-800 font-semibold block my-3 text-md"
          for="NumberDoc">Número de documento</label
        >
        <input
          class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
          type="text"
          name="NumberDoc"
          id="NumberDoc"
          bind:value={NumberDoc}
          placeholder="9023208989"
        />
      </div>
      <br />
      <button
        type="submit"
        class="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
        >Crear</button
      >
    </form>
  </div>
</div>
