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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m14.869 12.888 8.171-7.551c2.075-1.782.479-5.448-2.2-5.337H3.158C.467-.1-1.128 3.559.991 5.365l8.146 7.529A4.243 4.243 0 0 0 11 13.87V22H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-4v-8.131a4.258 4.258 0 0 0 1.869-.981ZM4.624 6H16a1 1 0 0 0 0-2H2.46a1.109 1.109 0 0 1 .7-2h17.682a1.148 1.148 0 0 1 1.076.753 1 1 0 0 1-.266 1.147l-8.135 7.517a2.254 2.254 0 0 1-1.5.589.049.049 0 0 0-.024 0 2.235 2.235 0 0 1-1.5-.583Z"/></svg>
  