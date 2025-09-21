export default function homeWork1(): void {
  type TBase = {
    id: number;
    question: string;
  };

  type TRadio = TBase & {
    type: "radio";
    value: string;
  };
  type TCheckboxSingle = TBase & {
    type: "checkbox";
    value: boolean;
  };
  type TCheckboxMulti = TBase & {
    type: "checkbox_multiple";
    value: string[];
  };
  type TText = TBase & {
    type: "text";
    value: string;
  };

  type TAnswer = TRadio | TCheckboxSingle | TCheckboxMulti | TText;

  const form = document.querySelector("#training-form") as HTMLFormElement;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Option A: FormData (short & robust)
    const fd = new FormData(form);
    const fd_freq = fd.get("frequency");
    const freq_raw = typeof fd_freq == "string" ? fd_freq : "";

    const check_multi_raw = fd.getAll("tech[]");
    const multi_check = check_multi_raw.map((item) => String(item));

    // use your union types here
    const answers: Record<string, TAnswer> = {
      name: {
        id: 1,
        question: "q1",
        type: "text",
        value: (fd.get("name") as string) ?? "",
      },
      terms: {
        id: 2,
        question: "q2",
        type: "checkbox",
        value: fd.get("accept_terms") !== null,
      },
      tech: {
        id: 3,
        question: "q3",
        type: "checkbox_multiple",
        value: multi_check,
      },
      frequency: {
        id: 4,
        question: "q4",
        type: "radio",
        value: freq_raw,
      },
    };

    console.log(JSON.stringify(answers, null, 4));
  });
}
