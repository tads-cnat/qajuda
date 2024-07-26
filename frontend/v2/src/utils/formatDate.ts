export function formatDate(data: Date | undefined): string {
  if (!data) return "";
  const data_f = new Date(data);
  const dia = data_f.getDate().toString().padStart(2, '0');
  const mes = (data_f.getMonth() + 1).toString().padStart(2, '0');
  const ano = data_f.getFullYear();
  const hora = data_f.getHours().toString().padStart(2, '0');
  const minuto = data_f.getMinutes().toString().padStart(2, '0');

  return `${dia}/${mes}/${ano} ${hora}:${minuto}`;
}