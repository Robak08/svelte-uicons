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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.7.293a1 1 0 0 0-1.414 0L19.5 3.086l-1.8-1.793a1 1 0 0 0-1.413 1.414L18.084 4.5 16.5 6.086l-1.794-1.793a1 1 0 0 0-1.413 1.414L15.085 7.5l-1.212 1.213c-3.54-4.385-6.308.58-4.07 4.071l-1.289 1.289-1.792-1.806A1 1 0 1 0 5.3 13.675l1.8 1.812c-1.016.982-1.235 1.563-3.241 1.538a3.5 3.5 0 1 0 2.117 5.949 1 1 0 0 0-1.413-1.414 1.506 1.506 0 0 1-2.376-1.789c.108-.184.44-.746 1.672-.746 2.5.024 3.333-.753 4.649-2.118l1.783 1.8A1 1 0 1 0 11.71 17.3l-1.788-1.8 1.287-1.288c3.517 2.236 8.453-.544 4.078-4.078l1.213-1.22 1.792 1.793A1 1 0 0 0 19.7 9.293L17.912 7.5 19.5 5.914l1.79 1.793a1 1 0 0 0 1.41-1.414L20.911 4.5 23.7 1.707a1 1 0 0 0 0-1.414Zm-8.714 12.483a2.892 2.892 0 0 1-3.762-3.764.132.132 0 0 1 .144.023l3.6 3.6a.126.126 0 0 1 .018.141Z"/></svg>
  