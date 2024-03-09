import { Title } from "@solidjs/meta";
import { action } from "@solidjs/router";

const nonWorking = action(async (form: FormData) => {
  "use server";
  console.log("This is not working form's name:", form.get("name"));
  return { redirect: "/" };
});

export default function Home() {
  return (
    <main>
      <Title>Bun</Title>
      <h1>Solid start - Bun</h1>
      <form method="post" action={nonWorking}>
        <input type="text" name="name" style="margin-right: 1em" />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
