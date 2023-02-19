<script>
  export let size = "100%";
  export let strokeWidth = 0;
  let customClass = "";
  export { customClass as class };
  
  if (size !== "100%") {
    size = size.slice(-1) === 'x' 
    ? size.slice(0, size.length -1) + 'em'
    : parseInt(size) + 'px';
  }
  </script>
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-seat-airline {customClass}"><path d="M21 22H9a.99.99 0 0 1-.851-.474.989.989 0 0 1-.044-.974l1.005-2.009a6.956 6.956 0 0 0 2.48.456h7.409c.881 0 1.714-.385 2.286-1.057s.817-1.561.674-2.44c-.232-1.427-1.551-2.503-3.066-2.503h-7.289c-.45 0-.846-.303-.964-.736l-.618-2.264H19a1 1 0 1 0 0-2H9.475L7.926 2.331C7.52.784 6.076-.214 4.564.008a3.003 3.003 0 0 0-2.067 1.313 3.003 3.003 0 0 0-.396 2.421l2.733 10.089a6.995 6.995 0 0 0 2.526 3.741l-1.043 2.086c-.468.938-.419 2.028.132 2.919S7.953 24 9.001 24h12a1 1 0 1 0 0-2ZM4.033 3.227a.983.983 0 0 1 .133-.803.981.981 0 0 1 .812-.446c.45 0 .881.357 1.016.872l2.716 9.941A3.006 3.006 0 0 0 11.604 15h7.289c.537 0 1.017.362 1.093.824A1 1 0 0 1 19 17h-7.409a5.01 5.01 0 0 1-4.826-3.692L4.033 3.227Z"/></svg>
  