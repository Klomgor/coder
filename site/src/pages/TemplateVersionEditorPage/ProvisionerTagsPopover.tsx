import AddIcon from "@mui/icons-material/Add";
import ExpandMoreOutlined from "@mui/icons-material/ExpandMoreOutlined";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import useTheme from "@mui/system/useTheme";
import { FormFields, FormSection, VerticalForm } from "components/Form/Form";
import { TopbarButton } from "components/FullPageLayout/Topbar";
import { Stack } from "components/Stack/Stack";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "components/deprecated/Popover/Popover";
import { useFormik } from "formik";
import { ProvisionerTag } from "modules/provisioners/ProvisionerTag";
import { type FC, Fragment } from "react";
import { docs } from "utils/docs";
import { getFormHelpers, onChangeTrimmed } from "utils/formUtils";
import * as Yup from "yup";

const initialValues = {
	key: "",
	value: "",
};

const validationSchema = Yup.object({
	key: Yup.string()
		.required("Required")
		.notOneOf(["owner"], "Cannot override owner tag"),
	value: Yup.string()
		.required("Required")
		.when("key", ([key], schema) => {
			if (key === "scope") {
				return schema.oneOf(
					["organization", "scope"],
					"Scope value must be 'organization' or 'user'",
				);
			}

			return schema;
		}),
});

export interface ProvisionerTagsPopoverProps {
	tags: Record<string, string>;
	onSubmit: (values: typeof initialValues) => void;
	onDelete: (key: string) => void;
}

export const ProvisionerTagsPopover: FC<ProvisionerTagsPopoverProps> = ({
	tags,
	onSubmit,
	onDelete,
}) => {
	const theme = useTheme();
	const form = useFormik({
		initialValues,
		validationSchema,
		onSubmit: (values) => {
			onSubmit(values);
			form.resetForm();
		},
	});
	const getFieldHelpers = getFormHelpers(form);

	return (
		<Popover>
			<PopoverTrigger>
				<TopbarButton
					color="neutral"
					css={{ paddingLeft: 0, paddingRight: 0, minWidth: "28px !important" }}
				>
					<ExpandMoreOutlined css={{ fontSize: 14 }} />
				</TopbarButton>
			</PopoverTrigger>
			<PopoverContent
				horizontal="right"
				css={{ ".MuiPaper-root": { width: 300 } }}
			>
				<div
					css={{
						color: theme.palette.text.secondary,
						padding: 20,
						borderBottom: `1px solid ${theme.palette.divider}`,
					}}
				>
					<VerticalForm onSubmit={form.handleSubmit}>
						<Stack>
							<FormSection
								title="Provisioner Tags"
								description={
									<>
										Tags are a way to control which provisioner daemons complete
										which build jobs.&nbsp;
										<Link
											href={docs("/admin/provisioners")}
											target="_blank"
											rel="noreferrer"
										>
											Learn more...
										</Link>
									</>
								}
							/>
							<Stack direction="row" spacing={1} wrap="wrap">
								{Object.entries(tags)
									// filter out owner since you cannot override it
									.filter(([key]) => key !== "owner")
									.map(([key, value]) => (
										<Fragment key={key}>
											{key === "scope" ? (
												<ProvisionerTag tagName={key} tagValue={value} />
											) : (
												<ProvisionerTag
													tagName={key}
													tagValue={value}
													onDelete={onDelete}
												/>
											)}
										</Fragment>
									))}
							</Stack>

							<FormFields>
								<Stack direction="row">
									<TextField
										{...getFieldHelpers("key")}
										size="small"
										onChange={onChangeTrimmed(form)}
										label="Key"
									/>
									<TextField
										{...getFieldHelpers("value")}
										size="small"
										onChange={onChangeTrimmed(form)}
										label="Value"
									/>
									<Button
										variant="contained"
										color="secondary"
										type="submit"
										aria-label="add"
										disabled={!form.dirty || !form.isValid}
									>
										<AddIcon />
									</Button>
								</Stack>
							</FormFields>
						</Stack>
					</VerticalForm>
				</div>
			</PopoverContent>
		</Popover>
	);
};
