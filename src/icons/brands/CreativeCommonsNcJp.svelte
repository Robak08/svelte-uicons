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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20.515 3.48C18.192 1.16 15.349 0 11.984 0 8.661 0 5.847 1.16 3.545 3.48 1.181 5.88 0 8.72 0 12c0 3.28 1.181 6.101 3.545 8.46C5.907 22.82 8.721 24 11.984 24c3.305 0 6.168-1.19 8.591-3.57C22.858 18.17 24 15.36 24 12c0-3.36-1.162-6.2-3.485-8.52zm-1.502 15.39c-1.983 1.96-4.315 2.94-6.998 2.94-2.684 0-4.997-.97-6.939-2.91-1.942-1.94-2.913-4.24-2.913-6.9a9.69 9.69 0 0 1 .436-2.916l6.144 2.736H7.391v1.868h2.811l.275.57v.905H7.391v1.867h3.086v2.713h2.986V17.03h3.105v-1.726l3.918 1.745a9.339 9.339 0 0 1-1.473 1.821zm-2.762-3.707h-2.787v-.905l.141-.273 2.646 1.178zm.318-2.485v-.859h-1.867l3.047-5.613h-3.184l-2.098 4.646-1.113-.496-1.917-4.15H6.251l1.321 2.467-3.961-1.765A10.9 10.9 0 0 1 5.106 5.04c1.883-1.92 4.185-2.88 6.909-2.88 2.722 0 5.036.96 6.938 2.88 1.922 1.9 2.883 4.22 2.883 6.96 0 1.015-.128 1.965-.383 2.853l-4.884-2.175z"/></svg>
  