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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 24a5.416 5.416 0 0 1-3.807-1.552L4.25 18.805C2.144 16.7 1 13.938 1 11s1.144-5.701 3.222-7.778C6.299 1.145 9.062 0 12 0s5.7 1.145 7.778 3.222C21.856 5.299 23 8.061 23 11s-1.145 5.7-3.222 7.778l-3.992 3.689A5.399 5.399 0 0 1 11.999 24Zm0-22a8.94 8.94 0 0 0-6.364 2.636C3.936 6.336 3 8.595 3 11s.936 4.664 2.636 6.364l3.935 3.635c1.336 1.306 3.542 1.286 4.837.02l3.984-3.682C20.063 15.664 21 13.404 21 11.001s-.937-4.664-2.636-6.364A8.94 8.94 0 0 0 12 2.001Zm1 12v-1c0-.551.408-1.208.929-1.495a4.02 4.02 0 0 0 2.008-4.222c-.283-1.613-1.607-2.937-3.221-3.22a4.022 4.022 0 0 0-3.287.873A3.993 3.993 0 0 0 8 8a1 1 0 0 0 2 0 2 2 0 0 1 2.37-1.968c.787.138 1.458.81 1.597 1.596a1.998 1.998 0 0 1-1.004 2.125C11.807 10.39 11 11.725 11 13v1a1 1 0 0 0 2 0Zm.5 3.5a1.5 1.5 0 0 0-3 0 1.5 1.5 0 0 0 3 0Z"/></svg>
  