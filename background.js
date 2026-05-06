const api = (typeof browser !== "undefined") ? browser : chrome;
api.runtime.onMessage.addListener(async (m, s, r) => {
  if (!m || m.type !== "openInTab" || !m.href) return;
  try {
    const tabs = await api.tabs.query({ active: true, currentWindow: true });
    const activeIndex = (tabs && tabs[0] && typeof tabs[0].index === "number") ? tabs[0].index : undefined;
    const createProps = { url: m.href, active: false };
    if (typeof activeIndex === "number") createProps.index = activeIndex + 1;
    api.tabs.create(createProps);
  } catch (e) {
    api.tabs.create({ url: m.href, active: false });
  }
});
