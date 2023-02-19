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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-person-praying {customClass}"><path d="M13 2.468a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm8.748 5.868a.998.998 0 0 0-1.411-.084l-3.062 2.714-1.918-2.685c-.486-.937-1.295-1.652-2.223-1.992a3.04 3.04 0 0 0-2.074-.184 3.154 3.154 0 0 0-2.019 1.69l-2.649 6.169c-.734 1.497-.401 2.787 1.057 3.974L12.959 22H4.983a1 1 0 0 0 0 2h9.525c.645 0 1.214-.412 1.415-1.024a1.489 1.489 0 0 0-.53-1.666l-6.719-4.952c-.835-.681-.729-1.019-.465-1.559l2.649-6.169c.144-.292.407-.509.724-.595.238-.065.47-.042.792.102.405.15.752.409 1.007.747l-2.404 5.729a1 1 0 0 0 1.843.774l1.907-4.546.955 1.337a1.936 1.936 0 0 0 2.66.5c.04-.026 3.319-2.93 3.319-2.93a1 1 0 0 0 .085-1.412Z"/></svg>
  