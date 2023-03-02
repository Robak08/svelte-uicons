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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.033.014a.994.994 0 0 0-1.152.821L20.01 11.98 7.236 9.291A6 6 0 0 0 0 15.162V18a6.006 6.006 0 0 0 6 6h6.014a9.518 9.518 0 0 0 8.715-5.687A9.335 9.335 0 0 0 21.4 15.8l2.454-14.634a1 1 0 0 0-.821-1.152ZM10.979 19.486a1 1 0 0 1-.978.793.987.987 0 0 1-.208-.022l-4.963-1.05a1 1 0 0 1 .414-1.957l4.963 1.05a1 1 0 0 1 .772 1.186Zm4.515-3.223a1 1 0 0 1-.977.795 1.029 1.029 0 0 1-.206-.021L5.8 15.252a1 1 0 1 1 .41-1.952l8.511 1.785a1 1 0 0 1 .773 1.178Z"/></svg>
  