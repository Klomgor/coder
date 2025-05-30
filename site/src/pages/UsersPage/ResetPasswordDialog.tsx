import type * as TypesGen from "api/typesGenerated";
import { CodeExample } from "components/CodeExample/CodeExample";
import { ConfirmDialog } from "components/Dialogs/ConfirmDialog/ConfirmDialog";
import type { FC } from "react";

interface ResetPasswordDialogProps {
	open: boolean;
	onClose: () => void;
	onConfirm: () => void;
	user?: TypesGen.User;
	newPassword?: string;
	loading: boolean;
}

const Language = {
	title: "Reset password",
	message: (username?: string): JSX.Element => (
		<>
			You will need to send <strong>{username}</strong> the following password:
		</>
	),
	confirmText: "Reset password",
};

export const ResetPasswordDialog: FC<ResetPasswordDialogProps> = ({
	open,
	onClose,
	onConfirm,
	user,
	newPassword,
	loading,
}) => {
	const description = (
		<>
			<p>{Language.message(user?.username)}</p>
			<CodeExample
				secret={false}
				code={newPassword ?? ""}
				css={{
					minHeight: "auto",
					userSelect: "all",
					width: "100%",
					marginTop: 24,
				}}
			/>
		</>
	);

	return (
		<ConfirmDialog
			type="info"
			hideCancel={false}
			open={open}
			onConfirm={onConfirm}
			onClose={onClose}
			title={Language.title}
			confirmLoading={loading}
			confirmText={Language.confirmText}
			description={description}
		/>
	);
};
