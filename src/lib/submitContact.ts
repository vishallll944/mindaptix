export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  website: string;
  company: string;
  budget: string;
  service: string;
  message: string;
};

export type ContactSubmitResult = {
  ok: true;
  id: string;
};

/** Mock async contact submit — replace with a real API later. */
export async function submitContact(
  payload: ContactPayload,
): Promise<ContactSubmitResult> {
  await new Promise((resolve) => setTimeout(resolve, 900));

  if (process.env.NODE_ENV === "development") {
    console.info("[submitContact]", payload);
  }

  return {
    ok: true,
    id: `mock_${Date.now().toString(36)}`,
  };
}
