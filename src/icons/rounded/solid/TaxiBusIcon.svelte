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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M17.109 7c.689 0 1.288.468 1.455 1.137l.243.97a4.973 4.973 0 0 1 3.641 2.97l.321.77c.293.703.515 1.424.704 2.153H8.526c.189-.729.411-1.451.705-2.154l.32-.769a4.98 4.98 0 0 1 3.642-2.971l.243-.97a1.499 1.499 0 0 1 1.455-1.137h2.219ZM2 16c0 1.302.839 2.402 2 2.816V20a1 1 0 0 0 2 0v-1c0-.622.04-1.263.125-2l.465-2.502c.045-.173.091-.335.137-.498H2v2ZM13.668.501a13.737 13.737 0 0 0-7.336 0C4.191 1.081 2.607 2.85 2.149 5h15.702c-.458-2.149-2.042-3.918-4.183-4.499Zm-2.131 7.027c.053-.184.118-.36.198-.529H2v1a2 2 0 1 0 0 4h5.417l.287-.691a6.967 6.967 0 0 1 3.833-3.78Zm12.324 9.471h-2.86v1a1 1 0 0 1-2 0v-1h-6v1a1 1 0 0 1-2 0v-1h-2.86c-.083.661-.14 1.326-.14 2 0 1.302.839 2.402 2 2.816v.184c0 1.103.897 2 2 2s2-.897 2-2h4c0 1.103.897 2 2 2s2-.897 2-2v-.184a2.996 2.996 0 0 0 2-2.816c0-.674-.057-1.339-.14-2Z"/></svg>
  