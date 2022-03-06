import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDate(date: Date, formatStr: string) {
  return format(date, formatStr, {
    locale: ptBR,
  });
}
