export default function guardrail(mathFunction) {
  try {
    const res = mathFunction();
    return [res, 'Guardrail was processed'];
  } catch (error) {
    return [error.message, 'Guardrail was processed'];
  }
}
