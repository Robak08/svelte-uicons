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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 15v6.5a2.5 2.5 0 1 1-2-2.45V15c0-.551-.448-1-1-1h-3c-.552 0-1 .449-1 1v6.5a2.5 2.5 0 1 1-2-2.45V15c0-1.654 1.346-3 3-3h3c1.654 0 3 1.346 3 3ZM8.896 11.843A4.962 4.962 0 0 1 8 9V5c0-2.757 2.243-5 5-5h6c1.709 0 3.217.864 4.119 2.175l-4.962 4.994-.475-.479a1.993 1.993 0 0 0-2.711-.111l-6.075 5.265Zm1.091-8.228a1.5 1.5 0 1 0 3.001-.001 1.5 1.5 0 0 0-3.001.001ZM10 21.5c0 .925.281 1.785.76 2.5H4.5A4.5 4.5 0 0 1 0 19.5v-5A4.5 4.5 0 0 1 4.5 10h.766c.448 0 .848.296.958.73A6.996 6.996 0 0 0 12.988 16l.012.002v1.291c-1.743.616-3 2.252-3 4.207ZM4 20H2.055c.2.977.968 1.75 1.945 1.95V20Zm0-4H2v2h2v-2Zm0-3.95A2.503 2.503 0 0 0 2.055 14H4v-1.95Zm19.919-7.847-4.351 4.374a2.004 2.004 0 0 1-2.83.002l-.476-.48-5.909 5.126c.77.484 1.672.775 2.646.775h.101a5.009 5.009 0 0 1 4.899-4h3c.979 0 1.885.293 2.657.781A4.955 4.955 0 0 0 23.999 9V5a4.87 4.87 0 0 0-.081-.797Z"/></svg>
  