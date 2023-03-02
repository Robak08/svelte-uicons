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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M3 5V4a4 4 0 0 1 4-4h1.47a2.992 2.992 0 0 1 1.7.528l1.885 1.3a1 1 0 0 0 .566.172H17a4 4 0 0 1 3.858 3zm20 15h-8.184A3 3 0 0 0 13 18.184V15h4a4 4 0 0 0 4-4V7H3v4a4 4 0 0 0 4 4h4v3.184A3 3 0 0 0 9.184 20H1a1 1 0 0 0 0 2h8.184a2.982 2.982 0 0 0 5.632 0H23a1 1 0 0 0 0-2z"/></svg>
  