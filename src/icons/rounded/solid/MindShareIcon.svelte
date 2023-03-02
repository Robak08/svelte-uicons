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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.27 16.245c.972.971.972 2.539.008 3.502L20.7 22.269a.997.997 0 0 1-1.414-.016 1 1 0 0 1 .016-1.414l1.881-1.84h-2.181c-1.654 0-3 1.346-3 3v1a1 1 0 1 1-2 0v-1c0-2.757 2.243-5 5-5h2.181l-1.881-1.84a1 1 0 0 1 1.398-1.43l2.57 2.515ZM9 0a4.007 4.007 0 0 0-3.898 3.102A4.008 4.008 0 0 0 2 7v.021A4.99 4.99 0 0 0 0 11c0 .886.235 1.737.686 2.5A4.89 4.89 0 0 0 0 16c0 1.686.858 3.244 2.267 4.165A5.466 5.466 0 0 0 7.5 24h.04c1.941-.014 3.46-1.701 3.46-3.643V2.005A2.006 2.006 0 0 0 9 0Zm8.115 15.258a3 3 0 0 1 .741-2.911 3.005 3.005 0 0 1 4.244-.045l1.143 1.119c.272-.482.553-1.019.582-1.126.116-.421.175-.857.175-1.295 0-1.568-.752-3.04-2-3.979V7a4.007 4.007 0 0 0-3.102-3.898A4.008 4.008 0 0 0 15 0h-.022C13.867.006 13 .977 13 2.088v16.31a7.03 7.03 0 0 1 4.115-3.14Z"/></svg>
  