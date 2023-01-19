import React, { FC } from 'react';

export const SettingCardTitle: FC<{ titleTag?: string; }> = ({ titleTag, children }) => {
	if (titleTag === "h2") {
		return (
			<h2 className="mb-0 font-weight-bold setting-card-title">{children}</h2>
		);
	}
	if (titleTag === "h3") {
		return (
			<h3 className="mb-0 font-weight-bold setting-card-title">{children}</h3>
		);
	}
	if (titleTag === "h4") {
		return (
			<h4 className="mb-0 font-weight-bold setting-card-title">{children}</h4>
		);
	}
	if (titleTag === "h5") {
		return (
			<h5 className="mb-0 font-weight-bold setting-card-title">{children}</h5>
		);
	}
	if (titleTag === "p") {
		return (
			<p className="mb-0 font-weight-bold setting-card-title">{children}</p>
		);
	}
  return (
    <h1 className="mb-0 font-weight-bold setting-card-title">{children}</h1>
  );
};
