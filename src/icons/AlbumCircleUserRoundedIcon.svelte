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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-album-circle-user {customClass}"><path d="M11 24H5c-2.76 0-5-2.24-5-5V5c0-2.76 2.24-5 5-5h14c2.76 0 5 2.24 5 5v5c0 .55-.45 1-1 1s-1-.45-1-1V5c0-1.65-1.35-3-3-3H5C3.35 2 2 3.35 2 5v14c0 1.65 1.35 3 3 3h6c.55 0 1 .45 1 1s-.45 1-1 1Zm1-10.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5ZM22 15c0-1.65-1.35-3-3-3s-3 1.35-3 3 1.35 3 3 3 3-1.35 3-3Zm1.25 8.97c.54-.14.86-.68.72-1.22C23.41 20.58 21.32 19 19 19s-4.41 1.58-4.97 3.75a1 1 0 0 0 .72 1.22 1 1 0 0 0 1.22-.72C16.3 21.97 17.6 21 19 21s2.7.97 3.03 2.25a1.003 1.003 0 0 0 1.22.72Zm-8.96-4.3c.53-.16.83-.71.67-1.24a.993.993 0 0 0-1.24-.67c-.55.17-1.13.25-1.71.25-3.31 0-6-2.69-6-6s2.69-6 6-6c2.31 0 4.43 1.35 5.42 3.43.24.5.83.71 1.33.47.5-.24.71-.83.47-1.33A8.04 8.04 0 0 0 12 4.01c-4.41 0-8 3.59-8 8s3.59 8 8 8c.78 0 1.55-.11 2.29-.33Z"/></svg>
  