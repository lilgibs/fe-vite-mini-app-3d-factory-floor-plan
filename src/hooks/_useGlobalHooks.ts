import { useNavigate, useSearchParams } from "react-router-dom";

export default function useGlobalHooks() {
  const [searchParams, setSearchParams] = useSearchParams();
  const formatNumber = (value: number) =>
    new Intl.NumberFormat(["ban", "id"]).format(value);

  const navigate = useNavigate();

  return {
    searchParams,
    setSearchParams,
    formatNumber,
    navigate,
  };
}
