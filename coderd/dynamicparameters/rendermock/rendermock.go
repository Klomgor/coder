// Code generated by MockGen. DO NOT EDIT.
// Source: github.com/coder/coder/v2/coderd/dynamicparameters (interfaces: Renderer)
//
// Generated by this command:
//
//	mockgen -destination ./rendermock.go -package rendermock github.com/coder/coder/v2/coderd/dynamicparameters Renderer
//

// Package rendermock is a generated GoMock package.
package rendermock

import (
	context "context"
	reflect "reflect"

	preview "github.com/coder/preview"
	uuid "github.com/google/uuid"
	hcl "github.com/hashicorp/hcl/v2"
	gomock "go.uber.org/mock/gomock"
)

// MockRenderer is a mock of Renderer interface.
type MockRenderer struct {
	ctrl     *gomock.Controller
	recorder *MockRendererMockRecorder
	isgomock struct{}
}

// MockRendererMockRecorder is the mock recorder for MockRenderer.
type MockRendererMockRecorder struct {
	mock *MockRenderer
}

// NewMockRenderer creates a new mock instance.
func NewMockRenderer(ctrl *gomock.Controller) *MockRenderer {
	mock := &MockRenderer{ctrl: ctrl}
	mock.recorder = &MockRendererMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockRenderer) EXPECT() *MockRendererMockRecorder {
	return m.recorder
}

// Close mocks base method.
func (m *MockRenderer) Close() {
	m.ctrl.T.Helper()
	m.ctrl.Call(m, "Close")
}

// Close indicates an expected call of Close.
func (mr *MockRendererMockRecorder) Close() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Close", reflect.TypeOf((*MockRenderer)(nil).Close))
}

// Render mocks base method.
func (m *MockRenderer) Render(ctx context.Context, ownerID uuid.UUID, values map[string]string) (*preview.Output, hcl.Diagnostics) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Render", ctx, ownerID, values)
	ret0, _ := ret[0].(*preview.Output)
	ret1, _ := ret[1].(hcl.Diagnostics)
	return ret0, ret1
}

// Render indicates an expected call of Render.
func (mr *MockRendererMockRecorder) Render(ctx, ownerID, values any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Render", reflect.TypeOf((*MockRenderer)(nil).Render), ctx, ownerID, values)
}
