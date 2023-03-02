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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16.585 9.616 15.21 6h2.422a5.885 5.885 0 0 1 4.728 2.4l.787 1.075a4.431 4.431 0 0 1 .72 1.525h-6.915a6.5 6.5 0 0 0-.367-1.384ZM12 4a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm2.722 6.343L13.071 6h-2.133L9.26 10.452A4.709 4.709 0 0 0 9.1 11h5.821a4.623 4.623 0 0 0-.199-.657ZM16.553 3.9a1 1 0 0 0 1.347-.453l1-2a1 1 0 1 0-1.79-.894l-1 2a1 1 0 0 0 .443 1.347Zm-4.565 14.987 2.786-5.253a4.591 4.591 0 0 0 .167-.634H9a4.585 4.585 0 0 0 .2.757ZM7.4 9.729 8.8 6H6.383a5.892 5.892 0 0 0-4.662 2.309L.9 9.383A4.366 4.366 0 0 0 .141 11h6.9A6.6 6.6 0 0 1 7.4 9.729ZM16.969 13a6.573 6.573 0 0 1-.344 1.4c-.015.04-3.756 7.074-3.759 7.075a.973.973 0 0 1-1.726.008s-3.774-6.912-3.79-6.955A6.586 6.586 0 0 1 6.994 13H.121a4.3 4.3 0 0 0 1.328 2.32l7.99 7.707a3.82 3.82 0 0 0 2.55.969 3.9 3.9 0 0 0 2.6-1l7.936-7.633A4.373 4.373 0 0 0 23.89 13ZM6.105 3.447A1 1 0 0 0 7.9 2.553l-1-2a1 1 0 1 0-1.79.894Z"/></svg>
  